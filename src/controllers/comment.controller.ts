import { Request, Response } from "express"
import commentsService from "../services/comments.service"

export default {
    create: async (req: Request, res: Response) => {
        const commentCreated = await commentsService.create(req.body)
        res.send(commentCreated)
    },
    getAll: async (req: Request, res: Response) => {
        const allComments = await commentsService.getAll()
        res.send(allComments)
    },
    
    getById: async (req: Request, res: Response) => {
        const comment = await commentsService.getById(req.params.id)
        res.send(comment)
    },
}