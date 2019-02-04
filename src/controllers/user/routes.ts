import * as express from 'express';
import { authMiddleWare } from '../../libs/routes';
import user from './Controller';

export const userRouter = express.Router();
userRouter
  .get('/', user.get)
  .post('/', user.post)
  .put('/', user.put)
  .delete('/:id', user.delete);
