const express = require ("express");
const app = express ();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ImportData = require("./DataImport")
const productRoute = require("./routes/ProductRoute")
const userRoute = require("./routes/UserRoute")
const {errorHandler, notFound} = require("./middleware/Errors")



dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection Successful!"))
.catch((err) => {
    console.log(err);
})

app.use(express.json());

app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

//ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

//app.use('/user', require('./routes/UserRoute'))

app.listen(process.env.PORT || 5000, console.log("Backend server is running!"));



