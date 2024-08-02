const express = require('express')
const router = express.Router()

// /api/cart/cartProduct
router.get("/", (req, res) => {
  res.json({
    message: "Get all product from cart",
  })
});

router.post("/", (req, res) => {
  res.send("Response added to cart!");
});

// /api/cart/cartProduct/filterData
router.get("/filterData", (req, res) => {
  res.send("Route filter data");
});

// /api/cart/cartProduct/:id
router.get("/:id", (req, res) => {
  // res.send(`Endpoint from route params ${req.params.id}`);
  res.json({
    message: `Get product from cart with id ${req.params.id}`,
    data: [
      {
        id: 1,
        name: "Product 1",
        price: 10000000
      }
    ]
  })
});

module.exports = router