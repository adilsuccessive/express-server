const HeadTrainer = "head-trainer";
const Trainer = "trainer";
const Trainee = "trainee";
export const permissions = {
  getUsers: {
    all: [HeadTrainer],
    read: [Trainee, Trainer],
    write: [Trainer],
    delete: []
  },
  writeUser: {
    all: ["trainer"],
    read: ["trainee", "trainer"],
    delete: []
  }
};
