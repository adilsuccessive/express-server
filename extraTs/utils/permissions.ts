import { permissions } from "../constants";

export default function hasPermission(
  moduleName: string,
  role: string,
  permissionType: string
) {
  if (permissions[moduleName]) {
    if (
      permissions[moduleName][permissionType].includes(role) ||
      permissions[moduleName]["all"].includes(role)
    ) {
      console.log("true");
    } else {
      console.log("false");
    }
  } else {
    console.log("false");
  }
}
