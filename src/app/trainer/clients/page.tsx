'use client';
import React, { useState, useEffect } from 'react';
import { useStyles } from './style/style';
import { useClientActions, useClientState } from '@/providers/clientProvider';

const ClientPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { styles } = useStyles();

    const { clients, isPending, isError } = useClientState();
    const { getClients} = useClientActions();

    useEffect(() => {
        getClients();
    }, ['']);

    if (isPending) {
        return (
            <div>Loading Clients...</div>
        )
    }

    if (isError) {
        return (
            <div>Error loading clients!</div>
        )
    }

    if (!clients || clients.length === 0) {
        return (
            <div>No clients found</div>
        )
    }

    return (
        <>
            <div className={styles.ClientsContainer}>
                <div className={styles.TopBar}>
                    <h2>Client Management</h2>
                    <button className={styles.AddButton}>Add Client</button>
                </div>

                <div className={styles.TableWrapper}>
                    <div className={styles.SearchWrapper}>
                        <input
                            type="text"
                            placeholder="Search clients..."
                            className={styles.SearchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <table className={styles.Table}>
                        <thead className={styles.TableHead}>
                            <tr>
                                <th className={styles.TableCell}>Name</th>
                                <th className={styles.TableCell}>Email</th>
                                <th className={styles.TableCell}>Contact</th>
                                <th className={styles.TableCell}>Gender</th>
                                <th className={styles.TableCell}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client) => (
                                <tr key={client.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td className={styles.TableCell}>{client.fullName}</td>
                                    <td className={styles.TableCell}>{client.email}</td>
                                    <td className={styles.TableCell}>{client.contactNumber}</td>
                                    <td className={styles.TableCell} style={{ textTransform: 'capitalize' }}>{client.sex}</td>
                                    <td className={styles.TableCell}>
                                        <span className={styles.StatusBadgeActive}>
                                            {client.activeState ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td className={styles.TableCell}>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ClientPage;