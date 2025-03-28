require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { poolConnect } = require("./db/db");

const app = express();
app.use(cors());
app.use(express.json());

// test route to check if server is running
app.get("/", (req, res) => res.send("Bookstore API is running"));

// import routes
app.use("/api/books", require("./routes/bookRoutes"));

const PORT = process.env.PORT || 5000;

poolConnect
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });
