export interface ITask {
  id?: number;
  title: string;
  urgency: boolean;
  category: string;
  date: Date;
  check: boolean;
}

export interface ITaskForm {
  id?: number;
  title: string;
  urgency: boolean;
  category: string;
  date: Date;
  check: boolean;
}
