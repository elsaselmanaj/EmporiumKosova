const express = require ("express");
const app = express ();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ImportData = require("./DataImport")
const productRoute = require("./routes/ProductRoute")
const userRoute = require("./routes/UserRoute")
const orderRoute = require("./routes/OrderRoute")
const {errorHandler, notFound} = require("./middleware/Errors")
const cors = require("cors");



dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection Successful!"))
.catch((err) => {
    console.log(err);
})

app.use(express.json());
app.use(cors())

app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.get("/api/config/paypal", (req,res) => {
    res.send(process.env.PAYPAL_CLIENT_ID);
});

//ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

//app.use('/user', require('./routes/UserRoute'))

const PORT = process.env.PORT || 1000

app.listen(PORT, console.log(`Backend server is running in port ${PORT}`));



