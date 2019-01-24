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
      res.status(200).send({
        status: "ok",
        message: "Successfully Created trainee",
        data: { name, id }
      });
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
      res.status(200).send({ status: "OK", message: "name Updated" });
    } else
      res.status(400).send({ status: "Bad request", message: "id not found" });
  }
  delete(req: Request, res: Response, next: NextFunction) {
    const data = {
      name: "trainee4",
      id: "4"
    };
    const { id } = req.body;
    if (id == data.id) {
      res.status(200).send({ status: "Ok", message: "Deleted" });
    } else
      res.status(400).send({ status: "Bad Request", message: "id not found" });
  }
}

export default new TraineeController();
