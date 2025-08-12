const express = require("express");
const router = express.Router();
const { OrdersModel } = require("../model/OrdersModel"); // adjust path if needed

// GET all orders
router.get("/", async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching orders" });
  }
});

module.exports = router;
