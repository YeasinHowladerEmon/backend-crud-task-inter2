import { ITask } from "./task.interface";
import { Task } from "./task.model";
import { ObjectId } from "mongodb";

const createTask = async (payload: Partial<ITask>): Promise<ITask> => {
  const result = await Task.create(payload);
  return result;
};
const getTask = async (): Promise<ITask[]> => {
  const result = await Task.find({});
  return result;
};
const updateTaskId = async (
  id: string,
  status: string
): Promise<ITask | null> => {
  const result = await Task.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { status: status } }
  );
  return result;
};
const deleteTaskId = async (id: string): Promise<ITask | null> => {
  const result = await Task.findOneAndDelete({ _id: new ObjectId(id) });
  return result;
};

export const TaskService = {
  createTask,
  getTask,

  updateTaskId,
  deleteTaskId
};
