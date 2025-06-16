'use client';
import React, { useState } from 'react';
import { Button, Card, Input } from 'antd';
import { ArrowLeftOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { useStyles } from './style/style';

const MOCK_FOOD_ITEMS = [
    {
        _id: "1",
        name: "Grilled Chicken Breast",
        protein: 31,
        carbs: 0,
        fat: 3.6,
        energy: 165,
        category: "protein",
        servingSize: 100,
    },
    {
        _id: "2",
        name: "Brown Rice",
        protein: 2.6,
        carbs: 23,
        fat: 0.9,
        energy: 111,
        category: "grains",
        servingSize: 100,
    },
    {
        _id: "3",
        name: "Broccoli",
        protein: 2.8,
        carbs: 7,
        fat: 0.4,
        energy: 34,
        category: "veg",
        servingSize: 100,
    },
    {
        _id: "4",
        name: "Greek Yogurt",
        protein: 10,
        carbs: 4,
        fat: 0.4,
        energy: 59,
        category: "dairy",
        servingSize: 100,
    },
    {
        _id: "5",
        name: "Banana",
        protein: 1.1,
        carbs: 23,
        fat: 0.3,
        energy: 89,
        category: "fruit",
        servingSize: 100,
    },
    {
        _id: "6",
        name: "Salmon Fillet",
        protein: 25,
        carbs: 0,
        fat: 12,
        energy: 208,
        category: "protein",
        servingSize: 100,
    },
];



const FoodItemsPage: React.FC = () => {

    interface FoodItem {
        _id: string;
        name: string;
        protein: number;
        carbs: number;
        fat: number;
        energy: number;
        category: string;
        servingSize: number;
    }
    const { styles } = useStyles();
    const [foodItems] = useState<FoodItem[]>(MOCK_FOOD_ITEMS);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const handleBackToDashboard = () => {
        console.log('Navigate back to dashboard');
    };

    const filteredFoodItems = foodItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                        onClick={() => setShowCreateForm(!showCreateForm)}
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
                        {filteredFoodItems.map((item) => (
                            <Card key={item._id} size="small">
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
                </Card>
            </div>
        </div>
    );
};

export default FoodItemsPage;
