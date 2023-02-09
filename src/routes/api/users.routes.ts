import { Router } from "express";
import userController from "../../controllers/user.controller";

const router = Router()

// PATH ROUTES: api/users
router.post("/",userController.create)
router.get("/",userController.getAll)
router.get("/:id",userController.getById)

export {router}