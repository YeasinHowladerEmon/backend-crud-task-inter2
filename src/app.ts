import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "../src/app/routes";
import httpStatus from "http-status";
import globalErrorHandler from "./app/middleware/globalErrorhanlder";
const app: Application = express();

//middleware
app.use(cors());

//parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application
app.use("/api/v1/", routes);


app.use(globalErrorHandler)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not FOund",
    errorMessage: [
      {
        path: req.originalUrl,
        message: "API not found"
      }
    ]
  });
  next();
});

export default app;
