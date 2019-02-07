import { IPermissions } from './Interface';
export const GetUsers: string = 'getUsers';
export const HeadTrainer: string = 'head-trainer';
export const Trainer: string = 'trainer';
export const Trainee: string = 'trainee';
export const permissions: IPermissions = {
  TRAINEE: {
    all: [HeadTrainer],
    delete: [],
    read: [Trainee, Trainer, HeadTrainer],
    write: [Trainer],
  },
};
