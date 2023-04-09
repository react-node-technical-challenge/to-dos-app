import React from 'react';
import { createUseStyles } from 'react-jss';
import { colors } from '../../shared/constants/colors';
import useToDosFilter from './shared/hooks/useToDosFilters';
import { Filter } from './shared/model/filter';

const useClasses = createUseStyles({
  list: {
    padding: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridColumnGap: 5,
    marginTop: 20
  },
  listItem: {
    listStyleType: 'none',
    textAlign: 'center',
    paddingBottom: 10,
    cursor: 'pointer',
    '&:hover': {
      borderBottom: `2px solid ${colors.grey2}`,
    }
  },
  selectedListItem: {
    borderBottom: `2px solid ${colors.grey2}`,
  },
});

export default function ToDoFilters() {
  const classes = useClasses();

  const {
    showAll,
    showOnlyCompleted,
    showOnlyUncompleted,
    selectedFilter,
  } = useToDosFilter();

  return (
    <ul className={classes.list}>
      <li
        className={`${classes.listItem} ${
          selectedFilter === Filter.All ? classes.selectedListItem : ''
        }`}
        onClick={() => showAll()}
      >
        All
      </li>

      <li
        className={`${classes.listItem} ${
          selectedFilter === Filter.OnlyCompleted ? classes.selectedListItem : ''
        }`}
        onClick={() => showOnlyCompleted()}
      >
        Only completed
      </li>

      <li
        className={`${classes.listItem} ${
          selectedFilter === Filter.OnlyUncompleted ? classes.selectedListItem : ''
        }`}
        onClick={() => showOnlyUncompleted()}
      >
        Only uncompleted
      </li>
    </ul>
  );
}
