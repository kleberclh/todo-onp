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

  getIndexById(id_task: string): number  {
    const result = taskRepository.get();

    let position: number  = 999999;

    result.map((obj, index) => {
      if (obj.id === id_task) {
        position = index;
      }
    });
    return position;
  }

  add(data: Task): Task {
    return taskRepository.add(data);
  }
  update(data: Task, id_task: string) {
    const position = this.getIndexById(id_task);

    if (position !== 999999) {
      return taskRepository.update(data, position);
    }
  }
}

export default TaskService;
