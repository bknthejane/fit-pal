'use client';
import React, { useState, useEffect } from 'react';
import { Button, Card, Input, Pagination } from 'antd';
import { ArrowLeftOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { useStyles } from './style/style';
import { useClientActions, useClientState } from '@/providers/clientProvider';
import { useRouter } from 'next/navigation';

const ClientPage: React.FC = () => {
  const { styles } = useStyles();
  const router = useRouter();
  const { clients, isPending, isError } = useClientState();
  const { getClients } = useClientActions();

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    getClients();
  }, ['']);

  const handleBack = () => {
    router.push('/trainer/dashboard');
  };

  const handleCreateClient = () => {
    router.push('/trainer/createClient');
  };

  const filteredClients = (clients || []).filter((client) =>
    client.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contactNumber.includes(searchTerm)
  );

  const totalItems = filteredClients.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredClients.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return (
    <div className={styles.PageWrapper}>
      <div className={styles.Navbar}>
        <div className={styles.NavContent}>
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={handleBack}
            className={styles.BackButton}
          >
            Back to Dashboard
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleCreateClient}
          >
            Add Client
          </Button>
        </div>
      </div>

      <div className={styles.ContentWrapper}>
        <Card
          title="Client Management"
          extra={
            <Input
              placeholder="Search clients..."
              prefix={<SearchOutlined />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.SearchInput}
            />
          }
        >
          {isPending ? (
            <div className={styles.LoadingWrapper}>Loading Clients...</div>
          ) : isError ? (
            <div className={styles.LoadingWrapper}>Error loading clients!</div>
          ) : currentItems.length === 0 ? (
            <div className={styles.LoadingWrapper}>No clients found.</div>
          ) : (
            <>
              <div className={styles.Grid}>
                {currentItems.map((client) => (
                  <Card key={client.id} size="small">
                    <h3 className={styles.CardTitle}>{client.fullName}</h3>
                    <div className={styles.CardDetails}>
                      <p><strong>Email:</strong> {client.email}</p>
                      <p><strong>Contact:</strong> {client.contactNumber}</p>
                      <p><strong>Gender:</strong> {client.sex}</p>
                      <p>
                        <strong>Status:</strong>{' '}
                        <span
                          style={{
                            color: client.activeState ? 'green' : 'red',
                            fontWeight: 'bold',
                          }}
                        >
                          {client.activeState ? 'Active' : 'Inactive'}
                        </span>
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              {totalItems > itemsPerPage && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                  <Pagination
                    current={currentPage}
                    total={totalItems}
                    pageSize={itemsPerPage}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                    showQuickJumper
                    showTotal={(total, range) =>
                      `${range[0]}-${range[1]} of ${total} clients`
                    }
                  />
                </div>
              )}
            </>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ClientPage;
