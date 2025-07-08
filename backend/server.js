require("dotenv").config();
const express = require("express");
const app = express();
const { connectDB } = require("./database/database");
const productRoutes = require("./routes/productRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port ", PORT);
});
