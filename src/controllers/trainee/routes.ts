import { Router } from "express";
import trainee from "./Controller";
import { validationHandler } from "../../libs/routes";
import validation from "./validation";

export const traineeRouter: Router = Router();
traineeRouter
  .get("/", validationHandler(validation.get), trainee.get)
  .post("/", validationHandler(validation.create), trainee.post)
  .put("/", validationHandler(validation.update), trainee.put)
  .delete("/:id", validationHandler(validation.delete), trainee.delete);
