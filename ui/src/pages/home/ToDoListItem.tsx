import React from 'react';
import { createUseStyles } from 'react-jss';
import { ToDo } from './shared/model/toDo';
import useToDos from './shared/hooks/useToDos';

const useClasses = createUseStyles({
  container: {
    display: 'flex',
    alignContent: 'center',
  },
  checkbox: {
    '-webkit-transform': 'scale(1.5)',
    marginRight: 20,
  },
  titleWhenCompleted: {
    textDecoration: 'line-through',
  },
});

export default function Section({ toDo }: { toDo: ToDo }) {
  const classes = useClasses();
  const { markToDoAsCompleted, markToDoAsUncompleted } = useToDos();

  return (
    <div className={classes.container}>
      <input
        type="checkbox"
        checked={toDo.completed}
        className={classes.checkbox}
        onClick={() =>
          toDo.completed ? markToDoAsUncompleted(toDo.id) : markToDoAsCompleted(toDo.id)
        }
      />
      <span
        className={toDo.completed ? classes.titleWhenCompleted : ''}
      >
        {toDo.title}
      </span>
    </div>
  );
}
