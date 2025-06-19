'use client';

import React, { useEffect } from 'react';
import { Card, Button, Divider } from 'antd';
import { EyeOutlined, AppstoreOutlined, PlusOutlined } from '@ant-design/icons';
import { useStyles } from './style/style';
import { useRouter } from 'next/navigation';
import { useClientState, useClientActions } from '@/providers/clientProvider';
import { useFoodState, useFoodActions } from '@/providers/foodItemsProvider';
import Footer from '@/app/components/footer/page';

const TrainerDashboard: React.FC = () => {
  const { styles } = useStyles();
  const router = useRouter();

  const { clients } = useClientState();
  const { getClients } = useClientActions();

  const { foods } = useFoodState();
  const { getFoods } = useFoodActions();

  useEffect(() => {
    getClients();
    getFoods();
  }, []);

  const handleViewClient = () => {
    router.push('/trainer/clients');
  };

  const handleAddClient = () => {
    router.push('/trainer/createClient')
  };

  const handleFoodItems = () => {
    router.push('/trainer/foodItems')
  };

  // const trainerInfo = {
  //   name: sessionStorage.getItem('name') || 'Trainer',
  // };

  const handleLogout = () => {
    sessionStorage.clear();
    router.push('/login');
  };

  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.NavLeft}>
          <a href="#"><li>FitPal</li></a>
        </div>
        <div className={styles.NavRight}>
          <Button type="primary" danger onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </nav>


      <div className={styles.Container}>
        <Card className={styles.BannerCard}>
          <h2 className={styles.BannerTitle}>Welcome back!</h2>
          <p className={styles.BannerText}>Here&pos;s your training overview for today</p>
        </Card>

        <div className={styles.SectionWrapper}>
          <div className={styles.StatCard}>
            <h3 className={styles.CardTitle}>Total Clients</h3>
            <p className={styles.Value}>{clients?.length || 0}</p>
            <p className={styles.Label}>Active clients</p>
          </div>

          <div className={styles.StatCard}>
            <h3 className={styles.CardTitle}>Meal Plans</h3>
            <p className={styles.Value}>{0}</p>
            <p className={styles.Label}>Active plans</p>
          </div>

          <div className={styles.StatCard}>
            <h3 className={styles.CardTitle}>Food Database</h3>
            <p className={styles.Value}>{foods?.length || 0}</p>
            <p className={styles.Label}>Food items</p>
          </div>
        </div>

        <Divider orientation="left">Quick Actions</Divider>
        <div className={styles.ButtonGrid}>
          <Button onClick={handleAddClient} icon={<PlusOutlined />} className={styles.ActionButton}>
            Add Client
          </Button>
          <Button onClick={handleFoodItems} icon={<AppstoreOutlined />} className={styles.ActionButton}>
            Manage Food Items
          </Button>
          <Button onClick={handleViewClient} icon={<EyeOutlined />} className={styles.ActionButton}>
            View All Clients
          </Button>
        </div>

        <Divider orientation="left">Recent Clients</Divider>
        <Card className={styles.RecentClientsCard}>
          <div className={styles.ClientList}>
            {clients?.slice(0, 3).map((client) => (
              <div key={client.id} className={styles.ClientCard}>
                <div>
                  <p className={styles.ClientName}>{client.fullName}</p>
                  <p className={styles.ClientEmail}>{client.email}</p>
                </div>
                <div
                  className={`${styles.ClientStatus} ${client.activeState ? styles.Active : styles.Inactive
                    }`}
                >
                  {client.activeState ? 'Active' : 'Inactive'}
                </div>
              </div>
            ))}
            {!clients?.length && <p>No clients found.</p>}
          </div>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default TrainerDashboard;
