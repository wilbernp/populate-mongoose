import { Request, Response } from "express"
import { Types } from "mongoose"
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
        // esto es para poder convertir el param al tipo que espera la funcion getById
        const postId = req.params.id as unknown as Types.ObjectId
        const post = await postService.getById(postId)
        res.send(post)
    }
}