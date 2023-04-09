import React, { ReactElement, useEffect, useState } from 'react';
import { ToDo } from '../model/toDo';
import { Filter } from '../model/filter';
import { useApi } from '../../../../shared/hooks/useApi';
import { defaultValue, ToDosContext } from './ToDosContext';

export default function ToDosContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  const { makeRequest } = useApi();
  const [toDos, setToDos] = useState<ToDo[] | null>(defaultValue.toDos);
  const [visibleToDos, setVisibleToDos] = useState<ToDo[] | null>(toDos);
  const [selectedFilter, setSelectedFilter] = useState(Filter.All);

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
        visibleToDos,
        setVisibleToDos,
        selectedFilter,
        setSelectedFilter,
      }}
    >
      {children}
    </ToDosContext.Provider>
  );
}
