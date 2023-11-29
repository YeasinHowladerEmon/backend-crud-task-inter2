import { Schema, model } from "mongoose";
import { ITask, TaskModel } from "./task.interface";

const taskSchema = new Schema<ITask, TaskModel>(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);

export const Task = model<ITask, TaskModel>("Task", taskSchema);
