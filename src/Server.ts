import * as express from "express";
class Server {
  private app: express.Express;
  constructor(private config) {
    this.app = express();
  }
  public bootstrap() {
    this.setupRoutes();
    return this;
  }
  public setupRoutes() {
    const { app } = this;
    app.get("/health-check", (req, res) => {
      res.send("I am Ok");
    });
  }
  public run() {
    const { app, config: { port } } = this;
    app.listen(port, error => {
      if (error) {
        throw error;
      }
      console.log(`app is listening on port ${port}`);
    });
  }
}
export default Server;
