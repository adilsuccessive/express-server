import * as express from 'express';
import { authMiddleWare } from '../../libs/routes';
import user from './Controller';

export const userRouter = express.Router();
userRouter
  .get('/', authMiddleWare('TRAINEE', 'read'), user.get)
  .post('/', user.post)
  .put('/', user.put)
  .delete('/:_id', user.delete);
