import { IUser } from '../../models/user.interface';

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
}

export const initalUserState: IUserState = {
  users: null,
  selectedUser: null
}
