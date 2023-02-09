import { Request, Response } from "express"
import postService from "../services/post.service"


export default {
    create: async (req: Request, res: Response) => {
        const postCreated = await postService.create(req.body)
        res.send(postCreated)
    },
    getAll: async (req: Request, res: Response) => {
        const allExamples = await postService.getAll()
        res.send(allExamples)
    },
    
    getById: async (req: Request, res: Response) => {
        const post = await postService.getById(req.params.id)
        res.send(post)
    }
}