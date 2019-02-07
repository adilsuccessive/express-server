import * as bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { userModel } from './../../repositories/user/UserModel';
import UserRepository from './../../repositories/user/UserRepository';

const userRepository = new UserRepository(userModel);
export default (req: Request, res: Response, next: NextFunction) => {
    const { emailId, pass } = req.body;
    console.log(emailId, pass);
    userRepository.findData({ email: emailId }).then((result) => {
    if (!result) {
        next({
            error: 'Invalid Email',
            message: 'Unauthorized Access',
            status: 400,
            });
        }
    const { password } = result;
    if (bcrypt.compareSync(pass, password)) {
        const token = jwt.sign({result}, process.env.key, { expiresIn: 15 * 60 });
        req.token = token;
        console.log(token);
        next();
        }
        else {
            next({
                error: 'Wrong Password',
                message: 'Unauthorized Access',
                status: 400,
            });
        }
        })
        .catch((err) => {
            next({
                error: 'User not found',
                message: 'Unauthorized Access',
                status: 400,
            });
        });
    };
