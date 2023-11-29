import { Date, Model } from "mongoose";

export interface ITask {
  title: string;
  description: string;
  status: string;
  date: Date;
}

export type TaskModel = Model<ITask, Record<string, unknown>>;
