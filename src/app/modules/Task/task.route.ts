import express from "express";
import { TaskController } from "./task.controller";

const route = express.Router();

route.get("/", TaskController.getTask); //get
route.patch("/taskUpdate/:id", TaskController.updateTaskId); //update
route.delete("/taskDelete/:id", TaskController.deleteTaskId); //delete
route.post("/create-task", TaskController.createTask); //post

export const taskRoutes = route;
