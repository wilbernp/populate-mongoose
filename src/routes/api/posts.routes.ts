import { Router } from "express";
import commentController from "../../controllers/comment.controller";
import postController from "../../controllers/post.controller";


const router = Router()

// PATH ROUTES: api/posts
router.post("/",postController.create)
router.get("/",postController.getAll)
router.get("/:id",postController.getById)
router.post("/:postId/comments",commentController.create)


export {router}