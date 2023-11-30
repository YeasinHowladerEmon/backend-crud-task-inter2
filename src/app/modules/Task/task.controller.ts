import { Request, Response } from "express";
import catchAsync from "../../../helpers/catchAsync";
import { TaskService } from "./task.service";
import sendResponse from "../../../helpers/sendResponse";
import { ITask } from "./task.interface";
import httpStatus from "http-status";

const createTask = catchAsync(async (req: Request, res: Response) => {
  const result = await TaskService.createTask(req.body);
  sendResponse<ITask>(res, {
    statusCode: httpStatus.OK,
    success: true,
    messages: "Task Create Successfully",
    data: result
  });
});
const getTask = catchAsync(async (req: Request, res: Response) => {
  const result = await TaskService.getTask();
  sendResponse<ITask[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    messages: "Task retrieved Successfully",
    data: result
  });
});

const updateTaskId = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const status = req.body.status;
  const result = await TaskService.updateTaskId(id, status);
  sendResponse<ITask>(res, {
    statusCode: httpStatus.OK,
    success: true,
    messages: "Task status Update Successfully",
    data: result
  });
});
const deleteTaskId = catchAsync(async (req: Request, res: Response) => {
  const result = await TaskService.deleteTaskId(req.params.id);
  sendResponse<ITask>(res, {
    statusCode: httpStatus.OK,
    success: true,
    messages: "Task delete Successfully",
    data: result
  });
});


export const TaskController = {
  createTask,
  getTask,

  updateTaskId,
  deleteTaskId
};
