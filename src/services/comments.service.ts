import { CommentModel } from "../schemas/comment.schema"
import { IComment } from "../types/comments"
import postService from "./post.service"

/* 
    IMPORTANTE! para dejar el ejemplo lo mas sencillo posible no se esta haciendo ningun tipo de validacion
    lo cual no esta bien pero preferi dejarlo de esta forma para enfocarme unicamente en como usar 
    el populate de mongoose para hacer referencias a otros modelos
 */
export default {
    create: async (comment:IComment) => {
        const findPost = await postService.getById(comment.postId)
        const commentCreated = await new CommentModel(comment).save()

        // se agrega el nuevo comentario al arreglo de comments del post correspondiente
        // para que dicho array muestre todos los comentarios en posteriores consultas al modelo de posts
        findPost?.comments?.unshift(commentCreated._id)
        await findPost?.save()

        return commentCreated
    },
    getAll: async () => {
        return await CommentModel.find()
    },

    getById: async (id:string) => {
        return await CommentModel.findById(id)
    },

}