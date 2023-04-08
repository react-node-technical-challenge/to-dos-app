import React, { useContext } from 'react';
import { ToDo } from '../model/toDo';
import { useApi } from '../../../../shared/hooks/useApi';
import { ToDosContext } from '../contexts/ToDosContext';

export default function useToDos() {
  const { makeRequest } = useApi();
  const { toDos, setToDos } = useContext(ToDosContext);

  return {
    toDos,
    addToDo: (title: string) => {
      makeRequest({
        method: 'POST',
        path: '/to-dos',
        body: { title },
      }).then((id: number) => {
        setToDos(
          (toDos as ToDo[]).concat([
            {
              id,
              title,
              completed: true,
            },
          ])
        );
      });
    },
    removeToDo: (toDo: ToDo) => {
      makeRequest({
        method: 'DELETE',
        path: '/to-dos',
      }).then(() => {
        setToDos((toDos as ToDo[]).filter(({ id }) => id !== toDo.id));
      });
    },
    markToDoAsCompleted: (id: number) => {
      makeRequest({
        method: 'PATCH',
        path: '/to-dos/completed',
      }).then(() => {
        setToDos(
          (toDos as ToDo[]).map((toDo) => {
            return toDo.id !== id
              ? toDo
              : {
                  ...toDo,
                  completed: true,
                };
          })
        );
      });
    },
  };
}