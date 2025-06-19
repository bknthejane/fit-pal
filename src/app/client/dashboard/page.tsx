'use client';

import React from 'react';
import { useStyles } from './style/style';
import { Button } from 'antd';
import Footer from '@/app/components/footer/page';
import { useRouter } from 'next/navigation';

const ClientDashboard: React.FC = () => {
    const { styles } = useStyles();
    const router = useRouter();

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
            <div className={styles.CenteredContainer}>
                <h1>Welcome to the Client Dashboard...</h1>
            </div>
            <Footer />
        </>
    );
};

export default ClientDashboard;
