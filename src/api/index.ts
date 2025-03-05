import "dotenv/config";

import cookieParser from "cookie-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

import { config } from "../core/config/app.config";
import { HTTPSTATUS } from "../core/config/http.config";
import { asyncHandler } from "./v1/middlewares/async-handler";
import { errorHandler } from "./v1/middlewares/error-handler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: config.APP_ORIGIN,
    credentials: true,
  }),
);

app.use(errorHandler);

app.get(
  "/",
  asyncHandler(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_request: Request, response: Response, _next: NextFunction) => {
      response.status(HTTPSTATUS.OK).json({
        message: "Server started successfully",
      });
    },
  ),
);

app.listen(config.PORT, async () => {
  console.log(`Server listening on port ${config.PORT} in ${config.NODE_ENV}.`);
});
