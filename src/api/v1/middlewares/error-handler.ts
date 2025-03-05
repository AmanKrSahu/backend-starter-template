import { ErrorRequestHandler } from "express";

import { HTTPSTATUS } from "../../../core/config/http.config";

export const errorHandler: ErrorRequestHandler = (
  error,
  request,
  response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
  console.error(`Error occured on PATH: ${request.path}`, error);

  if (error instanceof SyntaxError) {
    return response.status(HTTPSTATUS.BAD_REQUEST).json({
      message: "Invalid JSON format, please check your request body",
    });
  }

  return response.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
    message: "Internal server error",
    error: error?.message || "Unknown error occurred",
  });
};
