import { IConfig } from "./IConfig";
import { config } from "dotenv";

config();
const configuration: IConfig = Object.freeze({
  port: process.env.PORT,
  node_env: process.env.NODE_ENV
});
export default configuration;
