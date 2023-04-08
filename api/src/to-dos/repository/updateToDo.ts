import knex from '../../shared/database/knexInstance';
import { ToDo } from '../model/todo';
import { ToDoRow } from './shared/rows/toDo';

export default async function (
  id: number,
  updates: Partial<Omit<ToDo, 'id'>>
): Promise<void> {
  await knex('to_dos')
    .update({
      ...updates,
      updated_at: new Date(),
    } satisfies Partial<ToDoRow>)
    .where({
      id,
    });
}
