import * as express from 'express';
import { authMiddleWare, tokenRoutes, validationHandler } from '../../libs/routes';
import user from './Controller';
import validation from './validation';

export const userRouter = express.Router();
userRouter
  .get('/', authMiddleWare('traineee', 'read'), validationHandler(validation.get), user.get)
  .post('/', authMiddleWare('traineee', 'write'), validationHandler(validation.create), user.post)
  .post('/login', validationHandler(validation.createToken), tokenRoutes, user.createToken)
  .put('/', authMiddleWare('traineee', 'write'), validationHandler(validation.update), user.put)
  .delete('/:id', authMiddleWare('traineee', 'delete'), validationHandler(validation.delete), user.delete);
