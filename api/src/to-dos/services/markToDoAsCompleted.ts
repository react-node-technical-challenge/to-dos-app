import { ToDo } from '../model/todo';
import updateToDo from '../repository/updateToDo';

export default async function (toDo: ToDo): Promise<void> {
  return await updateToDo(toDo.id, {
    completed: true
  });
}
