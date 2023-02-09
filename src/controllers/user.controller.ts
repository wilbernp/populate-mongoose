import { Request, Response } from "express"
import userService from "../services/user.service"

export default {
    create: async (req: Request, res: Response) => {
        const userCreated = await userService.create(req.body)
        res.send(userCreated)
    },
    getAll: async (req: Request, res: Response) => {
        const allExamples = await userService.getAll()
        res.send(allExamples)
    },
    
    getById: async (req: Request, res: Response) => {
        const example = await userService.getById(req.params.id)
        res.send(example)
    }
}