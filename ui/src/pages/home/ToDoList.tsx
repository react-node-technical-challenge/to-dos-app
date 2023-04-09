import React from 'react';
import { createUseStyles } from 'react-jss';
import { colors } from '../../shared/constants/colors';
import useToDosFilters from './shared/hooks/useToDosFilters';
import ToDoListItem from './ToDoListItem';

const useClasses = createUseStyles({
  list: {
    padding: 0,
  },
  listItem: {
    listStyleType: 'none',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: colors.grey1,
  },
});

export default function ToDoList() {
  const classes = useClasses();
  const { visibleToDos } = useToDosFilters();

  return (
    <ul className={classes.list}>
      {visibleToDos?.map((toDo) => {
        return (
          <li className={classes.listItem} key={toDo.id}>
            <ToDoListItem toDo={toDo} />
          </li>
        );
      })}
    </ul>
  );
}
