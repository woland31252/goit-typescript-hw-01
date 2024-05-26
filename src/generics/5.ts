export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}
type UserRoleDescription = Record<UserRole, string>

const RoleDescription: UserRoleDescription = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};

console.log(RoleDescription);