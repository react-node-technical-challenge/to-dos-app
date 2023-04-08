import React from 'react';
import { ToDo } from './shared/model/toDo';
import { createUseStyles } from 'react-jss';

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

  return <>{toDo.title}</>;
}
