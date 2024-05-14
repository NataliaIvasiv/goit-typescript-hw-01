export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}



type UserRolesRecord = Record<UserRole, string>;

const RoleDescription: UserRolesRecord = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
console.log(RoleDescription);