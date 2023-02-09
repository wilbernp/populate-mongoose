import { Types } from "mongoose"
import { PostModel } from "../schemas/post.schema"
import { UserModel } from "../schemas/user.schema"
import { IPost } from "../types/post"

export default {
    create: async (post:IPost) => {
        const findUser = await UserModel.findById(post.author)
        const postCreated = await new PostModel(post).save()
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