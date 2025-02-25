import { Task } from "../models/Task";
import TaskRepository from "../repositories/TaskRepository";

const taskRepository = new TaskRepository();

class TaskService {
  constructor() {}
  get(status: string) {
    const result = taskRepository.get();
    const tasks: Task[] = [];

    result.map((obj) => {
      if (obj.status === status) {
        tasks.push(obj);
      }
    });

    return tasks;
  }
  getById(id_task: string): Task | {} {
    const result = taskRepository.get();

    let task = {};

    result.map((obj) => {
      if (obj.id === id_task) {
        task = obj;
      }
    });

    return task;
  }
  add(data: Task): Task {
    return taskRepository.add(data);
  }
}

export default TaskService;
