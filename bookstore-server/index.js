require("dotenv").config();

const express = require("express");
const corsMiddleware = require("./middleware/corsMiddleware");
const routes = require("./routes");
const client = require("./config/mongodb");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(corsMiddleware);
app.use(express.json());

// Routes
app.use("/", routes);

// Start server
app.listen(port, async () => {
  await client.connect();
  console.log(`Backend Server is live at ${port}`);
});
