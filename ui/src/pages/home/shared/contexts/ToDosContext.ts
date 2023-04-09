import { createContext } from 'react';
import { ToDo } from '../model/toDo';
import { Filter } from '../model/filter';

export type ToDosContext = {
  toDos: null | ToDo[];
  visibleToDos: null | ToDo[];
  selectedFilter: Filter;
  setToDos: (toDos: ToDo[]) => void;
  setVisibleToDos: (toDos: ToDo[]) => void;
  setSelectedFilter: (filter: Filter) => void;
};

export const defaultValue = {
  toDos: null,
  setToDos: () => {
    console.error('Function not implemented.');
  },
  visibleToDos: null,
  setVisibleToDos: () => {
    console.error('Function not implemented.');
  },
  selectedFilter: Filter.All,
  setSelectedFilter: () => {
    console.error('Function not implemented.');
  },
};

export const ToDosContext = createContext<ToDosContext>(defaultValue);
