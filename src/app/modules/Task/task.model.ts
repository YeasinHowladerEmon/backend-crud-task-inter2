import { Schema, model } from "mongoose";
import { ITask, TaskModel } from "./task.interface";

const taskSchema = new Schema<ITask, TaskModel>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'description is required'],
      max: 20
    },
    status: {
      type: String,
      required: [true, 'Status is required']
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
