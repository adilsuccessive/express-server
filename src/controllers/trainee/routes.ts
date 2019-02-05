import { Router } from 'express';
import { validationHandler } from '../../libs/routes';
import { authMiddleWare } from '../../libs/routes';
import trainee from './Controller';
import validation from './validation';

export const traineeRouter: Router = Router();
traineeRouter
  .get('/', validationHandler(validation.get), authMiddleWare('trainee', 'all'), trainee.get)
  .post('/', validationHandler(validation.create), authMiddleWare('trainee', 'read'), trainee.post)
  .put('/', validationHandler(validation.update), authMiddleWare('trainee', 'write'), trainee.put)
  .delete('/:id', validationHandler(validation.delete), authMiddleWare('trainee', 'delete'), trainee.delete);
