'use client'
import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import { useStyles } from './style/style';


const Navbar: React.FC = () => {
    const { styles } = useStyles();
    return (
        <>
            <nav className={styles.Navbar}>
                <div className={styles.Logo}>
                    <a href='#'><li>FitPal</li></a>
                </div>

                <div className={styles.Buttons}>
                    <Link href='#'>
                        <Button type='default'>Login</Button>
                    </Link>

                    <Link href='#'>
                        <Button type='primary'>Register</Button>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;