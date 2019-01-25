import * as express from 'express'
import  get  from './Controller'

export const userRouter = express.Router();
userRouter.get("/", get)