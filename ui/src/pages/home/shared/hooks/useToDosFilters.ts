import { useContext, useMemo } from 'react';
import { ToDo } from '../model/toDo';
import { Filter } from '../model/filter';
import { ToDosContext } from '../contexts/ToDosContext';

export default function useToDosFilters() {
  const { toDos, selectedFilter, setSelectedFilter } = useContext(ToDosContext);

  const visibleToDos = useMemo(() => {
    if (selectedFilter === Filter.OnlyCompleted) {
      return (toDos as ToDo[]).filter(toDo => !!toDo.completed);
    }

    if (selectedFilter === Filter.OnlyUncompleted) {
      return (toDos as ToDo[]).filter(toDo => !toDo.completed);
    }

    return toDos;
  }, [toDos, selectedFilter]);

  return {
    visibleToDos,
    selectedFilter,
    showAll: () => setSelectedFilter(Filter.All),
    showOnlyCompleted: () => setSelectedFilter(Filter.OnlyCompleted),
    showOnlyUncompleted: () => setSelectedFilter(Filter.OnlyUncompleted),
  };
}
