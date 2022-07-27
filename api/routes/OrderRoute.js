const express = require("express");
const asyncHandler = require("express-async-handler");
const Order = require("./../models/OrderModel");
const protect = require("../middleware/AuthMiddleware");

const orderRoute = express.Router();

//CREATE ORDER
orderRoute.post(
    "/",
    protect,
    asyncHandler(async (req, res) => {
        const{
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            totalPrice,
        } = req.body;

        if(orderItems && orderItems.length === 0) {
            res.status(400);
            throw new Error("No order items");
            return;
        } else {
            const order = new Order({
                orderItems,
                user: req.user._id,
                shippingAddress,
                paymentMethod,
                itemsPrice,
                totalPrice,
            });

            const createOrder = await order.save();
            res.status(201).json(createOrder);
        }
    })
);

// GET ORDER BY ID
orderRoute.get(
    "/:id",
    protect,
    asyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
      );
  
      if (order) {
        res.json(order);
      } else {
        res.status(404);
        throw new Error("Order Not Found");
      }
    })
  );

  
// ORDER IS PAID
orderRoute.put(
    "/:id/pay",
    protect,
    asyncHandler(async (req, res) => {
      const order = await Order.findById(req.params.id);
  
      if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
          id: req.body.id,
          status: req.body.status,
          update_time: req.body.update_time,
          email_address: req.body.email_address,
        };
  
        const updatedOrder = await order.save();
        res.json(updatedOrder);
      } else {
        res.status(404);
        throw new Error("Order Not Found");
      }
    })
  );

  //USER LOGIN ORDERS
orderRoute.get(
  "/",
  protect,
  asyncHandler(async (req,res) => {
    const order = await Order.find({user: req.user._id}).sort({ _id: -1});
    res.json(order);
  })
);








module.exports = orderRoute;
