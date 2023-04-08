import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { ToDo } from './shared/model/toDo';
import { colors } from '../../shared/constants/colors';
import useToDos from './shared/hooks/useToDos';

const useClasses = createUseStyles({
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15
  },
  checkbox: {
    '-webkit-transform': 'scale(1.5)',
    marginRight: 15,
    cursor: 'pointer'
  },
  titleWhenCompleted: {
    textDecoration: 'line-through',
  },
  delete: {
    color: colors.red,
    cursor: 'pointer',
    fontWeight: 'bold'
  },
});

export default function Section({ toDo }: { toDo: ToDo }) {
  const classes = useClasses();
  const [showOptionToDelete, setShowOptionToDelete] = useState<boolean>();
  const { markToDoAsCompleted, markToDoAsUncompleted, deleteToDo } = useToDos();

  return (
    <div
      className={classes.container}
      onMouseEnter={() => setShowOptionToDelete(true)}
      onMouseLeave={() => setShowOptionToDelete(false)}
    >
      <div>
        <input
          type="checkbox"
          defaultChecked={toDo.completed}
          className={classes.checkbox}
          onClick={() =>
            toDo.completed ? markToDoAsUncompleted(toDo.id) : markToDoAsCompleted(toDo.id)
          }
        />
        <span className={toDo.completed ? classes.titleWhenCompleted : ''}>
          {toDo.title}
        </span>
      </div>

      {showOptionToDelete && (
        <span className={classes.delete} onClick={() => deleteToDo(toDo)}>
          X
        </span>
      )}
    </div>
  );
}
