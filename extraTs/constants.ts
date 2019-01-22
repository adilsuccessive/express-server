import { IPermissions } from "./interface";
export const GetUsers: string = "getUsers";
export const HeadTrainer: string = "head-trainer";
export const Trainer: string = "trainer";
export const Trainee: string = "trainee";
export const permissions: IPermissions = {
  getUsers: {
    all: [HeadTrainer],
    read: [Trainee, Trainer],
    write: [Trainer],
    delete: []
  },
  writeUser: {
    all: [HeadTrainer],
    write: [HeadTrainer],
    read: [Trainee, Trainer],
    delete: []
  },
  setUser: {
    all: [HeadTrainer],
    read: [Trainee],
    write: [Trainer],
    delete: []
  }
};
