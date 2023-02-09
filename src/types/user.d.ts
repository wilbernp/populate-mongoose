import { Types } from "mongoose";

export interface IUser {
    username:string;
    posts:Types.ObjectId[]
}