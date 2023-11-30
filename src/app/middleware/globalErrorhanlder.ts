import { ErrorRequestHandler } from "express";
import config from "../../config";
import handleValidationError from "../../helpers/handleValidationError";
import { IGenericErrorMessage } from "../../helpers/erros";

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.env === "development"
    ? console.log(`🐱‍🏍 globalErrorHandler ~~`, { error })
    : console.log("🐱‍🏍 globalErrorHandler ~", error);

  let statusCode = 500;
  let message = "Someting went Wrong";
  let errorMessages:IGenericErrorMessage[] = [];

  if (error?.name === "ValidationError") {
    const sampleError = handleValidationError(error);
    statusCode = sampleError.statusCode;
    message = sampleError.message;
    errorMessages = sampleError.errorMessages;
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: "",
            message: error?.message
          }
        ]
      : [];
  }
  res.status(statusCode).json({
    status: false,
    message,
    errorMessages,
    stack: config.env !== "production" ? error?.stack : undefined
  });
  next();
};

export default globalErrorHandler;
