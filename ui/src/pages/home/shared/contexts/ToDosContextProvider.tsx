import React, { ReactElement, useEffect, useState } from 'react';
import { ToDo } from '../model/toDo';
import { useApi } from '../../../../shared/hooks/useApi';
import { defaultValue, ToDosContext } from './ToDosContext';

export default function ToDosContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const { makeRequest } = useApi();
  const [toDos, setToDos] = useState<ToDo[] | null>(defaultValue.toDos);

  useEffect(() => {
    makeRequest<ToDo[]>({
      method: 'GET',
      path: '/to-dos',
    }).then(setToDos);
  }, []);

  return (
    <ToDosContext.Provider
      value={{
        toDos,
        setToDos,
      }}
    >
      {children}
    </ToDosContext.Provider>
  );
}
