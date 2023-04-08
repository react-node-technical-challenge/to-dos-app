import React from 'react';
import { createUseStyles } from 'react-jss';
import { colors } from '../../shared/constants/colors';
import useToDos from './shared/hooks/useToDos';
import ToDoListItem from './ToDoListItem';

const useClasses = createUseStyles({
  list: {
    padding: 0,
  },
  listItem: {
    listStyleType: 'none',
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: colors.grey1,
  },
});

export default function ToDoList() {
  const classes = useClasses();
  const { toDos } = useToDos();

  return (
    <ul className={classes.list}>
      {toDos?.map((toDo) => {
        return (
          <li className={classes.listItem} key={toDo.id}>
            <ToDoListItem toDo={toDo} />
          </li>
        );
      })}
    </ul>
  );
}
