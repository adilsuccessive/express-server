import * as jwt from 'jsonwebtoken';
import { userModel } from './../../repositories/user/UserModel';
import UserRepository from './../../repositories/user/UserRepository';
import hasPermission from './permissions';

export default (module, permissionType) => (req, res, next) => {
  const token = req.header('Authorization');
  // console.log(token);

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
  // })
  const repository = new UserRepository(userModel);
  try {
  const user = jwt.verify(token, process.env.key);
  const { _id } = user;
  repository.findOne({ _id }).then((result) => {
    if (result.name !== module ) {
      next({
        error: 'Unauthorized Access',
        message: 'User not match',
        status: 403,
      });
    } else if (!hasPermission(module, result.role, permissionType)) {
      next({ status: 401, message: 'Wrong Permission' });
    } else {
      req.body = result.id;
      next();
    }
  });
} catch (err) {
  next({ status: 403, message: 'Unauthorized Access'});
}

};
