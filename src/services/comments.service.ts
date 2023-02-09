import { CommentModel } from "../schemas/comment.schema"
import { IComment } from "../types/comments"

export default {
    create: async (comment:IComment) => {
        const exampleCreated = await new CommentModel(comment).save()
        return exampleCreated
    },
    getAll: async () => {
        return await CommentModel.find()
    },

    getById: async (id:string) => {
        return await CommentModel.findById(id)
    },

}