import knex from '../../shared/database/knexInstance';
import fromToDoRowToToDo from './shared/mappers/fromToDoRowToToDo';
import { ToDo } from '../model/todo';
import { ToDoRow } from './shared/rows/toDo';

export default async function (id: number): Promise<ToDo> {
  const [row] = await knex('to_dos').select().where({ id }) as ToDoRow[];

  return fromToDoRowToToDo(row);
}
