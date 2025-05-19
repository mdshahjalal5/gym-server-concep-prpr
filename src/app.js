import express from "express";
import cors from "cors";
import { notFound } from "./App/middlewires/notFound.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Assalamu alaikum, gym server is running!");
});

app.use(notFound);
export default app;
