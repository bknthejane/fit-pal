'use client';

import React from 'react';
import { Card, Button, Divider } from 'antd';
import { PlusOutlined, FileTextOutlined, AppstoreOutlined, EyeOutlined } from '@ant-design/icons';
import { useStyles } from './style/style';

const TrainerDashboard: React.FC = () => {
  const { styles } = useStyles();

  const trainerInfo = {
    name: 'test trainer 2',
    email: 'test2@trainer2.com',
    role: 'admin',
    planType: 'base',
    contactNumber: '0716051164',
  };

  const mockClients = [
    {
      id: '1',
      fullName: 'test-client-name-surname',
      email: 'client2@client2.com',
      contactNumber: '27711233221',
      sex: 'male',
      activeState: true,
    },
  ];

  const mockMealPlans = [
    {
      id: '1',
      name: 'Weight Loss Plan',
      clientName: 'client 2',
      description: 'desc',
      notes: 'notes',
      status: 'active',
    },
  ];

  const mockFoodItems = [
    {
      id: '1',
      name: 'new test veg',
      category: 'veg',
      protein: 28,
      carbs: 1,
      fat: 2,
      energy: 58,
      servingSize: '100g',
    },
  ];

  return (
    <div className={styles.Container}>
      <Card className={styles.BannerCard}>
        <h2 className={styles.BannerTitle}>Welcome back, {trainerInfo.name}!</h2>
        <p className={styles.BannerText}>Here&apos;s your training overview for today</p>
      </Card>

      <div className={styles.SectionWrapper}>
        <div className={styles.StatCard}>
          <h3 className={styles.CardTitle}>Total Clients</h3>
          <p className={styles.Value}>{mockClients.length}</p>
          <p className={styles.Label}>Active clients</p>
        </div>

        <div className={styles.StatCard}>
          <h3 className={styles.CardTitle}>Meal Plans</h3>
          <p className={styles.Value}>{mockMealPlans.length}</p>
          <p className={styles.Label}>Active plans</p>
        </div>

        <div className={styles.StatCard}>
          <h3 className={styles.CardTitle}>Food Database</h3>
          <p className={styles.Value}>{mockFoodItems.length}</p>
          <p className={styles.Label}>Food items</p>
        </div>
      </div>

      <Divider orientation="left">Quick Actions</Divider>
      <div className={styles.ButtonGrid}>
        <Button icon={<PlusOutlined />} className={styles.ActionButton}>
          Add Client
        </Button>
        <Button icon={<FileTextOutlined />} className={styles.ActionButton}>
          Create Meal Plan
        </Button>
        <Button icon={<AppstoreOutlined />} className={styles.ActionButton}>
          Manage Food Items
        </Button>
        <Button icon={<EyeOutlined />} className={styles.ActionButton}>
          View All Clients
        </Button>
      </div>

      <Divider orientation="left">Recent Clients</Divider>
      <Card className={styles.RecentClientsCard}>
        <div className={styles.ClientList}>
          {mockClients.map((client) => (
            <div key={client.id} className={styles.ClientCard}>
              <div>
                <p className={styles.ClientName}>{client.fullName}</p>
                <p className={styles.ClientEmail}>{client.email}</p>
              </div>
              <div
                className={`${styles.ClientStatus} ${
                  client.activeState ? styles.Active : styles.Inactive
                }`}
              >
                {client.activeState ? 'Active' : 'Inactive'}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TrainerDashboard;
