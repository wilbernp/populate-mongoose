import { model, Schema, Types } from "mongoose";
import { IPost } from "../types/post";

const PostSchema = new Schema<IPost>({
    content:String,
    author:{type:Schema.Types.ObjectId, ref:"User"},
},{timestamps:true})

export const PostModel = model<IPost>("Post",PostSchema)