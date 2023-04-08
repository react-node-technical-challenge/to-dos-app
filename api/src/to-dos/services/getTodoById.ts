import { ToDo } from '../model/todo';
import getTodoById from '../repository/getTodoById';

export default async function (id: number): Promise<ToDo | null> {
  return await getTodoById(id);
}
