import { Request, Response } from "express";
import catchAsync from "../../../helpers/catchAsync";
import { TaskService } from "./task.service";

const createTask = catchAsync(async (req: Request, res: Response) => {
  const result = await TaskService.createTask(req.body);
});

export const TaskController = {
    createTask
};
