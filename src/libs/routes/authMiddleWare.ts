// import { userSchema } from './../../repositories/user/UserModel';
import * as jwt from 'jsonwebtoken';
import UserRepository from './../../repositories/user/UserRepository';
import hasPermission from './permissions';

export default (module, permissionType) => (req, res, next) => {
  const token = req.header('Authorization');
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
  // })
  const repository = new UserRepository();
  const user = jwt.verify(token, process.env.key);
  repository.findOne({ id: user.id }).then(use => {
    console.log('User is', user);
    if (!user) {
      next({ error: 'Unauthorized Access', status: 403 });
    }
    if (hasPermission(module, user.role, permissionType)) {
      console.log(module, 'has permission to', permissionType);
    } else {
      next({ status: 401, message: 'Wrong Permission' });
    }
  });

  next();
};
