import React, { ChangeEvent, useState } from 'react';
import { createUseStyles } from 'react-jss';
import useToDos from './shared/hooks/useToDos';

const useClasses = createUseStyles({
  container: {
    display: 'flex',
    width: '100%',
  },
  input: {
    width: '100%',
  },
  button: {
    marginLeft: 15,
  },
});

export default function ToDoCreateForm() {
  const classes = useClasses();
  const { addToDo } = useToDos();
  const [title, setTitle] = useState<string>();

  return (
    <section className={classes.container}>
      <input
        value={title}
        className={classes.input}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setTitle(event.target.value);
        }}
      />
      <button
        onClick={() => addToDo(title as string)}
        disabled={!title}
        className={classes.button}
      >
        Add
      </button>
    </section>
  );
}
