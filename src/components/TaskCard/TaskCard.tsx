import React from 'react';

import styles from './TaskCard.module.css';
import { TaskCardDescription, TaskCardHeader, TaskCardMasterLevel, TaskCardPrice, TaskCardSeeMoreButton } from './components';

export interface TaskCardProps {
  prop?: string;
}

export function TaskCard({prop = 'default value'}: TaskCardProps) {
  return (
    <li className={styles.taskCard}>
      <TaskCardHeader />
      <div className={styles.taskCardCostAndLevel}>
        <TaskCardPrice />
        <TaskCardMasterLevel />
      </div>
      <TaskCardDescription />
      <TaskCardSeeMoreButton />
    </li>
  );
}
