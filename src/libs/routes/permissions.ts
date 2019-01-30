import { permissions } from "../constants";

export default function hasPermission(
  moduleName: string,
  role: string,
  permissionType: string
): boolean {
  if (permissions[moduleName]) {
    if (
      permissions[moduleName][permissionType].includes(role) ||
      permissions[moduleName]["all"].includes(role)
    ) {
      return true;
    } else {
      return false;
    }
  } else {
      return false;
  }
}
