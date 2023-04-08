import React from 'react';
import { createUseStyles } from 'react-jss';
import useToDos from './shared/hooks/useToDos';
import ToDoListItem from './ToDoListItem';

const useClasses = createUseStyles({
  list: {
    
  },
  listItem: {
    
  },
});

export default function ToDoList() {
  const classes = useClasses();
  const { toDos } = useToDos();

  return (
    <ul className={classes.list}>
      {toDos?.map((toDo) => {
        return (
          <li className={classes.listItem}>
            <ToDoListItem toDo={toDo} />
          </li>
        );
      })}
    </ul>
  );
}
