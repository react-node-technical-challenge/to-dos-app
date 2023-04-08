export type ToDoRow = {
  id: number;
  title: string;
  user_id: string;
  completed: boolean;
  updated_at: Date | null;
  created_at: Date;
};
