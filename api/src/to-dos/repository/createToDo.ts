import knex from '../../shared/database/knexInstance';
import { ToDo } from '../model/todo';
import { ToDoRow } from './shared/rows/toDo';

export default async function (toDo: Omit<ToDo, 'id'>): Promise<number> {
  const [{ id }] = await knex('to_dos')
    .insert({
      title: toDo.title,
      completed: toDo.completed,
      user_id: toDo.userId,
      created_at: new Date(),
      updated_at: new Date(),
    } satisfies Omit<ToDoRow, 'id'>)
    .returning('id') as { id: number }[];

  return id;
}
