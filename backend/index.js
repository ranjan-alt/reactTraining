require("dotenv").config({ path: "./.env" });
const express = require("express");
const connectDB = require("./db/db");
const authRoutes = require("./routes/authRoute");
const cors = require("cors"); // Import CORS middleware

const port = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());

//connect to DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
