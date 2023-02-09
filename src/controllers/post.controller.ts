import { Request, Response } from "express"
import postService from "../services/post.service"


export default {
    create: async (req: Request, res: Response) => {
        const createdExample = await postService.create(req.body)
        res.send(createdExample)
    },
    getAll: async (req: Request, res: Response) => {
        const allExamples = await postService.getAll()
        res.send(allExamples)
    },
    
    getById: async (req: Request, res: Response) => {
        const example = await postService.getById(req.params.id)
        res.send(example)
    }
}