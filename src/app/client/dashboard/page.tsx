'use client';

import React from 'react';
import { useStyles } from './style/style';

const ClientDashboard: React.FC = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.CenteredContainer}>
      <h1>Welcome to the Client Dashboard...</h1>
    </div>
  );
};

export default ClientDashboard;
