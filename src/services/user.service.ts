import { UserModel } from "../schemas/user.schema"
import { IUser } from "../types/user"


export default {
    create: async (user:IUser) => {
        const userCreated = await new UserModel(user).save()
        return userCreated
    },
    getAll: async () => {
        
        return await UserModel.find()
        // con esto se elimina cualquier propiedad que se desee agregando el signo menos(-) antes del nombre
        //  de la propiedad que se desea eliminar, para eliminar mas de una propiedad se separan con un
        //  espacio ej: .select("-__v -_id")
        .select("-__v")
    },

    getById: async (id:string) => {
        return await UserModel.findById(id)
        .populate({
            path:"posts",
            // dentro del populate tambien se puede eliminar propiedades de esta forma
            select:"-__v"
        })
        // esto se puede tambien aunque se use populate
        .select("-__v")
    },

}