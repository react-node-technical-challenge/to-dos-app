import knex from '../../shared/database/knexInstance';
import { ToDo } from '../model/todo';

export default async function (toDo: ToDo): Promise<void> {
  await knex('to_dos').delete().where({
    id: toDo.id,
  });
}
