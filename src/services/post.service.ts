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
    },

    getById: async (id:string) => {
        return await PostModel.findById(id)
    },

}