import { Types } from "mongoose"
import { PostModel } from "../schemas/post.schema"
import { UserModel } from "../schemas/user.schema"
import { IPost } from "../types/post"

/* 
    IMPORTANTE! para dejar el ejemplo lo mas sencillo posible no se esta haciendo ningun tipo de validacion
    lo cual no esta bien pero preferi dejarlo de esta forma para enfocarme unicamente en como usar 
    el populate de mongoose para hacer referencias a otros modelos
 */

export default {
    create: async (post:IPost) => {
        const findUser = await UserModel.findById(post.author)
        const postCreated = await new PostModel(post).save()

        // se agregar el nuevo post al arreglo de posts del usuario que crea el post,
        // esto para que en las consultas posteriores al modelo de usuario se incluya dicho array
        // con todos los posts que ha creado
        findUser?.posts.unshift(postCreated._id)
        await findUser?.save()

        return postCreated
    },
    getAll: async () => {
        return await PostModel.find()
        // se obtiene los campos seleccionados del autor del post
        .populate({path:"author", select:"_id username"})
        // se obtiene el array de comentarios del pots
        .populate({
            path:"comments",
            select:"-__v",
            // se anida otro populate para obtener los campos especificados del autor del comentario
            populate:{path:"author", select:"_id username"}
        })
        .select("-__v")
    },

    getById: async (id:Types.ObjectId) => {
        return await PostModel.findById(id)
        .populate({path:"author", select:"_id username"})
        .select("-__v")
    },

}