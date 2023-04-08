import React from 'react';
import { createUseStyles } from 'react-jss';
import { ToDo } from './shared/model/toDo';
import useToDos from './shared/hooks/useToDos';

const useClasses = createUseStyles({
  grid: {
    margin: 30,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 30,
  },
});

export default function Section({ toDo }: { toDo: ToDo }) {
  const classes = useClasses();
  const { markToDoAsCompleted, markToDoAsUncompleted } = useToDos();

  return (
    <>
      <input
        type="checkbox"
        checked={toDo.completed}
        onClick={() =>
          toDo.completed ? markToDoAsUncompleted(toDo.id) : markToDoAsCompleted(toDo.id)
        }
      />
      {toDo.title}
    </>
  );
}
