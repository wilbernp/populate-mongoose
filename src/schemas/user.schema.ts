import { model, Schema } from "mongoose";
import { CreateExample } from "../types/example.d.t";
import { IUser } from "../types/user";

const UserSchema = new Schema<IUser>({
   username:String,
   posts:[{type:Schema.Types.ObjectId, ref:"User"}]
},{
    timestamps:true
})

export const UserModel = model<IUser>("User",UserSchema)