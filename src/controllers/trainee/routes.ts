import { Router } from "express";
import trainee from "./Controller";

export const traineeRouter: Router = Router();
traineeRouter
  .get("/", trainee.get)
  .post("/", trainee.post)
  .put("/", trainee.put)
  .delete("/", trainee.delete);
