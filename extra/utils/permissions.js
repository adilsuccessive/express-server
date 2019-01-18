let permissions = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  },
  writeUser: {
    all: ["trainer"],
    read: ["trainee", "trainer"],
    delete: []
  }
};
function hasPermission(moduleName, role, permissionType) {
  if (permissions[moduleName]) {
    if (permissions[moduleName][permissionType].includes(role) || permissions[moduleName]["all"].includes(role)) {
      console.log("true");
    } else {
      console.log("false");
    }
  } else {
    console.log("false");
  }
}
hasPermission("getUsers", "trainee", "read");
hasPermission("get", "trainee", "read");
hasPermission("getUsers", "trainee", "all");
hasPermission("getUsers", "head-trainer", "read");
hasPermission("writeUser", "trainee", "read");
