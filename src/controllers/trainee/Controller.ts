import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
class TraineeController {
  public get(req, res) {
    const data = [
      {
        name: 'trainee1',
      },
      {
        name: 'trainee2',
      },
    ];
    res.status(200).send(successHandler('User Data', 200, data));
  }
  public post(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    if (!name || !id) {
      const filed = !name ? 'Name' : 'Id';
      return next({
        error: 'Bad request',
        message: `${filed} Not Found`,
        status: 400,
      });
    }

    res
      .status(200)
      .send(successHandler('Successfully created trainee', 200, { name, id }));
  }
  public put(req: Request, res: Response, next: NextFunction) {
    const data = {
      id: '3',
      name: 'trainee3',
    };
    const { name, id } = req.body;
    if (id !== data.id) {
      return next({
        error: 'Bad request',
        message: 'id not found',
        status: 400,
      });
    }
    data.name = name;
    res.status(200).send(successHandler('Updated Trainee', 200, data));
  }
  public delete(req: Request, res: Response, next: NextFunction) {
    const data = {
      id: '4',
      name: 'trainee4',
    };
    const id = req.params.id;
    if (id !== data.id) {
      return next({
        error: 'Bad request',
        message: 'id not found',
        status: 400,
      });
    }
    res.status(200).send(successHandler('Deleted Trainee', 200, data));
  }
}

export default new TraineeController();
