import knex from '../../shared/database/knexInstance';
import fromToDoRowToToDo from './shared/mappers/fromToDoRowToToDo';
import { ToDo } from '../model/todo';
import { ToDoRow } from './shared/rows/toDo';

export default async function (userId: string): Promise<ToDo[]> {
  const rows = (await knex('to_dos').select().where({ user_id: userId })) as ToDoRow[];

  return rows.map(fromToDoRowToToDo);
}
