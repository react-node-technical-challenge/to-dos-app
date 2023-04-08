import { createContext } from 'react';
import { ToDo } from '../model/toDo';

export type ToDosContext = {
  toDos: null | ToDo[];
  setToDos: (toDos: ToDo[]) => void;
};

export const defaultValue = {
  toDos: null,
  setToDos: () => {
    console.error('Function not implemented.');
  },
};

export const ToDosContext = createContext<ToDosContext>(defaultValue);
