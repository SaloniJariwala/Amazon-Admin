import { IUser } from "./SignUp";

export interface ILoggedInUserState {
    user: IUser;
    token: string;
}