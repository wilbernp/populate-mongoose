import { model, Schema } from "mongoose";
import { IComment } from "../types/comments";

const CommentSchema = new Schema<IComment>({
   author:{type:Schema.Types.ObjectId, ref:"User"},
   postId:{type:Schema.Types.ObjectId, ref:"Post"},
   content:String
},{timestamps:true})

export const CommentModel = model<IComment>("Comment",CommentSchema)