import { Router } from 'express'
import trainee from './Controller'

export const traineeRouter: Router = Router();
traineeRouter.get("/", trainee.get)
traineeRouter.post("/", trainee.post)
traineeRouter.put("/", trainee.put)
traineeRouter.delete("/", trainee.delete)