import React from 'react';
import { createUseStyles } from 'react-jss';
import ToDoList from './ToDoList';
import ToDoFilters from './ToDoFilters';
import ToDoCreateForm from './ToDoCreateForm';
import ToDosContextProvider from './shared/contexts/ToDosContextProvider';

const useClasses = createUseStyles({
  h1: {
    fontSize: 28,
  },
  container: {
    width: 650,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default function Section() {
  const classes = useClasses();

  return (
    <ToDosContextProvider>
      <main className={classes.container}>
        <h1 className={classes.h1}>My Tasks</h1>

        <ToDoCreateForm />
        <ToDoFilters />
        <ToDoList />
      </main>
    </ToDosContextProvider>
  );
}
