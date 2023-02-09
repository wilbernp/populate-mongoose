import { Router } from "express";
import postController from "../../controllers/post.controller";


const router = Router()

// PATH ROUTES: api/posts
router.post("/",postController.create)
router.get("/",postController.getAll)
router.get("/:id",postController.getById)


export {router}