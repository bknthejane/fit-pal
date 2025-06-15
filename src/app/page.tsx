'use client'
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";
import React from 'react';
import Link from 'next/link';
import { useStyles } from "./style/style";

export default function Home() {
  const { styles } = useStyles();
  return (
    <>
      <div>
        <Navbar />

        <main className={styles.Main}>
          <div className={styles.Content}>
            <h1 className={styles.Heading}>
              Manage your clients and <br />
              <span className={styles.Highlight}>meal plans efficiently</span>
            </h1>
            <p className={styles.Paragraph}>
              A comprehensive platform for personal trainers to <br />
              manage clients, create customized meal plans, and track <br />
              progress all in one place.
            </p>
            <Link href="#" className={styles.Button}>
              Get started
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
