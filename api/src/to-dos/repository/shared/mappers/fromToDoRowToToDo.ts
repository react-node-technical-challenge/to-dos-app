import { ToDo } from '../../../model/todo';
import { ToDoRow } from '../rows/toDo';

export default function (row: ToDoRow): ToDo {
  return {
    id: row.id,
    title: row.title,
    userId: row.user_id,
    completed: row.completed,
  };
}
