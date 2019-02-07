import * as express from 'express';
import { tokenRoutes } from '../../libs/routes';
import { validationHandler } from '../../libs/routes';
import { authMiddleWare } from '../../libs/routes';
import user from './Controller';
import validation from './validation';

export const userRouter = express.Router();
userRouter
  .get('/', validationHandler(validation.get), user.get)
  .post('/', validationHandler(validation.create), tokenRoutes, user.post)
  .put('/', validationHandler(validation.update), user.put)
  .delete('/:id', validationHandler(validation.delete), user.delete);
