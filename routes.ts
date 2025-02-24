import { Router } from "express";
import TaskController from "./src/controllers/TaskController";
const taskController = new TaskController();
const router = Router();

router.get("/tasks", taskController.get);
router.get("/task/:id_task");
router.post("/task", taskController.add);
router.put("/task/:id_task" );
router.delete("/task/:id_task");

export default router;
