import { UserModel } from "../schemas/user.schema"
import { IUser } from "../types/user"


export default {
    create: async (user:IUser) => {
        const userCreated = await new UserModel(user).save()
        return userCreated
    },
    getAll: async () => {
        return await UserModel.find()
    },

    getById: async (id:string) => {
        return await UserModel.findById(id)
    },

}