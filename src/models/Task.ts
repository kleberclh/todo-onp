export interface Task {
  id: string;
  descricao: string;
  data: string;
  status: "completed" | "in_progress";
}
