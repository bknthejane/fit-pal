'use client';
import React from 'react';
import { useStyles } from './style/style'

const Footer: React.FC = () => {
    const { styles } = useStyles();

    return (
        <>
            <footer className={styles.Footer}>
                <p>©️ Developed by Bonolo Nthejane - 2025</p>
            </footer>
        </>
    )
}

export default Footer;