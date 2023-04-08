import { ToDo } from '../model/todo';
import deleteToDo from '../repository/deleteToDo';

export default async function (toDo: ToDo): Promise<void> {
  await deleteToDo(toDo);
}
