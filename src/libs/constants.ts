
import { IPermissions } from './Interface';
export const GetUsers: string = 'getUsers';
export const HeadTrainer: string = 'HeadTrainer';
export const Trainer: string = 'trainer';
export const Trainee: string = 'trainee';
export const Traineee: string = 'traineee';
export const permissions: IPermissions = {
  [Traineee]: {
    all: [HeadTrainer],
    delete: [],
    read: [Trainee, Trainer, HeadTrainer],
    write: [Trainer],
  },
};
