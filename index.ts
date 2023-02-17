import express, { json } from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import "express-async-errors";
import { handleError } from "./utils/errors";
import { adRouter } from "./routers/ad.router";
import { config } from "./config/config";

const app = express();

app.use(
  cors({
    origin: config.corsOrigin,
  })
);
app.use(json());
app.use(
  rateLimit({
    windowMs: 5 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  })
);

app.use("/ad", adRouter);

app.use(handleError);

app.listen(3001, "0.0.0.0", () => {
  console.log("Listening on http://localhost:3001");
});

// 33:06
