import express from "express";
import rootRoute from "./src/routes/rootRoute.js";

const port = 8081;
const app = express();
app.use(express.json());
app.use(express.static("."));
app.use(rootRoute)
app.listen(port, () => {
  console.log(`connect ${port}`);
});