import { Task } from "../models/Task";
import TaskRepository from "../repositories/TaskRepository";

const taskRepository = new TaskRepository();

class TaskService {
  constructor() {}
  add(data: Task): Task {
    return taskRepository.add(data);
  }
}

export default TaskService;
