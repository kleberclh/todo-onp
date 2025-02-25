import { Request, Response } from "express";
import TaskService from "../services/TaskService";

const taskService = new TaskService();
class TaskController {
  constructor() {}

  get(Req: Request, Res: Response) {
    const { status } = Req.query;
    if (status && (status === "in_progress" || status === "completed")) {
      const result = taskService.get(status);
      Res.status(201).json({
        message: "resultado",
        result,
      });
      console.log(result);
    } else {
      Res.status(401).json({ error: "Ocorreu algum erro" });
    }
  }

  getById(Req: Request, Res: Response) {
    const { id_task } = Req.params;
    if (id_task) {
      const result = taskService.getById(id_task);
      Res.json(result);
    } else {
      Res.status(401).json({ error: "Invalid params" });
    }
  }
  add(Req: Request, Res: Response) {
    const { id, descricao, data, status } = Req.body;

    if (id && descricao && data && status) {
      if (status === "in_progress" || status === "completed") {
        const result = taskService.add(Req.body);
        Res.status(201).json(result);
      } else {
        Res.status(401).json({
          error: "Invalid status, in_progress or completed",
        });
      }
    } else {
      Res.status(401).json({ error: "Invalid parameterssss" });
    }
  }
}

export default TaskController;
