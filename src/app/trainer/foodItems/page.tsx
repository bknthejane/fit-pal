'use client';
import React, { useState, useEffect } from 'react';
import { Button, Card, Input, Pagination } from 'antd';
import { ArrowLeftOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { useStyles } from './style/style';
import { useFoodActions, useFoodState } from '@/providers/foodItemsProvider';
import { useRouter } from 'next/navigation';

const FoodItemsPage: React.FC = () => {
    const { foods } = useFoodState();
    const { getFoods } = useFoodActions();
    const { styles } = useStyles();
    const router = useRouter();
    
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;

    useEffect(() => {
        getFoods();
    }, ['']);

    const handleBackToDashboard = () => {
        router.push('/trainer');
    };

    const handleAddFood = () => {
        router.push('/trainer/createFoodItem');
    };

    const filteredFoodItems = (foods || []).filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalItems = filteredFoodItems.length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredFoodItems.slice(startIndex, endIndex);

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
                        onClick={handleBackToDashboard}
                        className={styles.BackButton}
                    >
                        Back to Dashboard
                    </Button>
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={handleAddFood}
                    >
                        Add Food Item
                    </Button>
                </div>
            </div>

            <div className={styles.ContentWrapper}>
                <Card
                    title="Food Items"
                    extra={
                        <Input
                            placeholder="Search food items..."
                            prefix={<SearchOutlined />}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className={styles.SearchInput}
                        />
                    }
                >
                    <div className={styles.Grid}>
                        {currentItems.map((item) => (
                            <Card key={item.id} size="small">
                                <h3 className={styles.CardTitle}>{item.name}</h3>
                                <div className={styles.CardDetails}>
                                    <p><strong>Category:</strong> {item.category}</p>
                                    <p><strong>Energy:</strong> {item.energy} kcal</p>
                                    <p><strong>Protein:</strong> {item.protein}g</p>
                                    <p><strong>Carbs:</strong> {item.carbs}g</p>
                                    <p><strong>Fat:</strong> {item.fat}g</p>
                                    <p><strong>Serving:</strong> {item.servingSize}g</p>
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
                                    `${range[0]}-${range[1]} of ${total} items`
                                }
                            />
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default FoodItemsPage;