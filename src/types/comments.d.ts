import { Types } from "mongoose";

export interface IComment {
    content:string;
    author:Types.ObjectId;
    postId?:Types.ObjectId
}