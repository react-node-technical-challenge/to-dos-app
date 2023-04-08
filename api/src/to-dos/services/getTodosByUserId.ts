import { ToDo } from '../model/todo';
import getTodosByUserId from '../repository/getTodosByUserId';

export default async function (userId: string): Promise<ToDo[]> {
  return await getTodosByUserId(userId);
}
