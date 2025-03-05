import { NextFunction, Request, Response } from "express";

type AsynControllerType = (
  request: Request,
  response: Response,
  next: NextFunction,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<any>;

export const asyncHandler =
  (controller: AsynControllerType): AsynControllerType =>
  async (request, response, next) => {
    try {
      await controller(request, response, next);
    } catch (error) {
      next(error);
    }
  };
