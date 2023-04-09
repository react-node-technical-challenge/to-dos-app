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
  noTasksMessage: {
    textAlign: 'center',
    marginTop: 150,
    color: colors.grey3,
  },
});

export default function ToDoList() {
  const classes = useClasses();
  const { visibleToDos } = useToDosFilters();

  return (
    <ul className={classes.list}>
      {!!visibleToDos?.length &&
        visibleToDos.map((toDo) => {
          return (
            <li className={classes.listItem} key={toDo.id}>
              <ToDoListItem toDo={toDo} />
            </li>
          );
        })}

      {!visibleToDos?.length && (
        <p className={classes.noTasksMessage}>There are no tasks</p>
      )}
    </ul>
  );
}
