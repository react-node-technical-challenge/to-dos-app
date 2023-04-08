import React from 'react';
import { createUseStyles } from 'react-jss';
import ToDoList from './ToDoList';
import ToDoCreateForm from './ToDoCreateForm';
import ToDosContextProvider from './shared/contexts/ToDosContextProvider';

const useClasses = createUseStyles({
  container: {
    width: 500,
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
        <ToDoCreateForm />
        <ToDoList />
      </main>
    </ToDosContextProvider>
  );
}
