import React from 'react';

import styles from './HeaderFindTask.module.css';

export interface HeaderFindTaskProps {
  prop?: string;
}

export function HeaderFindTask({prop = 'default value'}: HeaderFindTaskProps) {
  return (
    <li className={styles.headerFindTask}>
      <button className={styles.headerFindTaskButton}>
        Find Task
      </button>
    </li>
  );
}
