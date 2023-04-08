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
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 4,
  },
  button: {
    marginLeft: 15,
    width: 75,
    cursor: 'pointer',
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
        placeholder='Example: tidy up the house'
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
