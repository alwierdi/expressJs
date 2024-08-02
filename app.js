const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Route
const cartProductRouter = require("./routes/cartProduct"); // import dari route yg sudah di export
app.use("/api/cart/cartProduct", cartProductRouter);

// Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
