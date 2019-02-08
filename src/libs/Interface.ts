export interface IPermissions {
    [traineee: string]: {
      all: string[];
      read: string[];
      write: string[];
      delete: string[];
    };
  }
