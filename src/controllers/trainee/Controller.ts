import { Request, Response, NextFunction } from "express";
import successHandler from "../../libs/routes/successHandler";
class TraineeController {
  get(req, res) {
    const data = [
      {
        name: "trainee1"
      },
      {
        name: "trainee2"
      }
    ];
    res.status(200);
    res.send(successHandler("User Data", 400, data));
  }
  post(req: Request, res: Response, next: NextFunction) {
    const { name, id } = req.body;
    if (!name || !id) {
      const filed = !name ? "Name" : "Id";
      next({
        status: 400,
        message: `${filed} Not Found`,
        error: "Bad request"
      });
    } else {
      res.status(200).send(successHandler("Successfully created trainee", 200, {name, id}));
    }
  }
  put(req: Request, res: Response, next: NextFunction) {
    const data = {
      name: "trainee3",
      id: "3"
    };
    const { name, id } = req.body;
    if (id == data.id) {
      data.name = name;
      res.status(200).send(successHandler("Updated Trainee",200 , data));
    } else
      next({status: 400, message: "id not found", error:"Bad request"});
  }
  delete(req: Request, res: Response, next: NextFunction) {
    const data = {
      name: "trainee4",
      id: "4"
    };
    const { id } = req.body;
    if (id == data.id) {
      res.status(200).send(successHandler("Deleted Trainee", 200, data));
    } else
      next({status: 400, message: "id not found", error:"Bad request"});
  }
}

export default new TraineeController();
