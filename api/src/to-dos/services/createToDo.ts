import { ToDo } from '../model/todo';
import createToDo from '../repository/createToDo';

export default async function (toDo: Omit<ToDo, 'id'>): Promise<number> {
  return await createToDo(toDo);
}
