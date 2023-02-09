import { CommentModel } from "../schemas/comment.schema"
import { IComment } from "../types/comments"
import postService from "./post.service"

export default {
    create: async (comment:IComment) => {
        const findPost = await postService.getById(comment.postId)
        const commentCreated = await new CommentModel(comment).save()
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