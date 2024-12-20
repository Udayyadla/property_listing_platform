import express from "express";
import { connectToDB } from "./dbconnection.js";
import { router } from "./routes/property.router.js";
const app = express();
app.use(express.json())
app.use("/api",router)
app.listen(8080, () => {
  connectToDB();
  console.log("server is litening at localhost:8080");
});
