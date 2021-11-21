export default interface IUser {
  id: string
  fullName: string
  loggedIn: boolean
  role: IRole
}

export enum IRole {
  Reception,
  Patient,
  Doctor,
  Lab,
  Admin,
}
