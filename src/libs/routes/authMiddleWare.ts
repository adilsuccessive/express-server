import * as jwt from "jsonwebtoken";
import hasPermission from "./permissions";
import UserRepository from "src/repositories/user/UserRepository";
import { userInfo } from "os";

export default (module, permissionType) => (req, res, next) => {
  const token = req.header("Authorization");
  console.log(token);

  // try {
  //   const user = jwt.verify(token, process.env.key);
  //   if (hasPermission(module, user.role, permissionType)) {
  //     console.log(module, "has permission to", permissionType);
  //   } else {
  //     next({ status: 401, message: "Wrong Permission" });
  //   }
  // } catch (err) {
  //   next({ status: 403, message: "Unauthorized Access" });
  // }
  // new UserRepository().findOne({_id: user.id}).then(user=>{
  //   if(user){
  //     next({error:"error"})
   // }
  //})

  next();
};
