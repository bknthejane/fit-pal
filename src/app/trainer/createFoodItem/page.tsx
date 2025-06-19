'use client';
import React from 'react';
import { Button, Card, Form, Input, Select } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import type { FormProps } from 'antd';
import { useStyles } from './style/style';
import { useFoodActions, useFoodState } from '@/providers/foodItemsProvider';
import { IFood } from '@/providers/foodItemsProvider/context';
import { useRouter } from 'next/navigation';



const CreateFoodItem: React.FC = () => {
    const { isPending } = useFoodState();
    const { createFood } = useFoodActions();
    const router = useRouter();

    const { Option } = Select;
    const [form] = Form.useForm();
    const { styles } = useStyles();

    const handleBackToDashboard = () => {
        router.push('/trainer/foodItems');
    };

    const onFinish: FormProps<IFood>["onFinish"] = async (values) => {
        const newFoodItem = {
            name: values.name,
            protein: values.protein,
            carbs: values.carbs,
            sugar: values.sugar,
            fat: values.fat,
            fiber: values.fiber,
            sodium: values.sodium,
            potassium: values.potassium,
            category: values.category,
            servingSize: values.servingSize,
            cholestorol: values.cholesterol,
            energy: values.energy
        }
        
        try {
            await createFood(newFoodItem);
            router.push('/trainer/foodItems');
        } catch (error) {
            console.error('Error creating food item:', error);
        }
    }

    const onFinishFailed: FormProps<IFood>["onFinishFailed"] = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

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
                        Back to Food Items
                    </Button>
                </div>
            </div>

            <div className={styles.ContentWrapper}>
                <Card title="Create New Food Item" className={styles.Card}>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className={styles.Form}
                    >
                        <div className={styles.Grid}>
                            <Form.Item<IFood>
                                name="name"
                                label="Name"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item<IFood>
                                name="category"
                                label="Category"
                                rules={[{ required: true }]}
                            >
                                <Select placeholder="Select category">
                                    <Option value="protein">Protein</Option>
                                    <Option value="carbs">Carbohydrates</Option>
                                    <Option value="veg">Vegetables</Option>
                                    <Option value="fruit">Fruits</Option>
                                    <Option value="dairy">Dairy</Option>
                                    <Option value="grains">Grains</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item<IFood>
                                name="protein"
                                label="Protein (g)"
                                rules={[{ required: true }]}
                            >
                                <Input type="number" step="0.1" />
                            </Form.Item>
                            <Form.Item<IFood>
                                name="carbs"
                                label="Carbs (g)"
                                rules={[{ required: true }]}
                            >
                                <Input type="number" step="0.1" />
                            </Form.Item>
                            <Form.Item<IFood>
                                name="fat"
                                label="Fat (g)"
                                rules={[{ required: true }]}
                            >
                                <Input type="number" step="0.1" />
                            </Form.Item>
                            <Form.Item<IFood>
                                name="energy"
                                label="Energy (kcal)"
                                rules={[{ required: true }]}
                            >
                                <Input type="number" />
                            </Form.Item>
                            <Form.Item<IFood>
                                name="servingSize"
                                label="Serving Size (g)"
                                rules={[{ required: true }]}
                            >
                                <Input type="number" />
                            </Form.Item>
                            <Form.Item<IFood>
                                name="sugar"
                                label="Sugar (g)"
                                rules={[{ required: true }]}
                            >
                                <Input type="number" step="0.1" />
                            </Form.Item>
                            <Form.Item<IFood>
                                name="fiber"
                                label="Fiber (g)"
                                rules={[{ required: true }]}
                            >
                                <Input type="number" step="0.1" />
                            </Form.Item>
                            <Form.Item<IFood>
                                name="sodium"
                                label="Sodium (mg)"
                                rules={[{ required: true }]}
                            >
                                <Input type="number" />
                            </Form.Item>
                            <Form.Item<IFood>
                                name="potassium"
                                label="Potassium (mg)"
                                rules={[{ required: true }]}
                            >
                                <Input type="number" />
                            </Form.Item>
                            <Form.Item<IFood>
                                name="cholesterol" 
                                label="Cholesterol (mg)"
                                rules={[{ required: true }]}
                            >
                                <Input type="number" />
                            </Form.Item>
                        </div>
                        <Form.Item className={styles.SubmitWrapper}>
                            <Button 
                                type="primary" 
                                htmlType="submit" 
                                block 
                                size="large"
                                loading={isPending}
                            >
                                Create Food Item
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default CreateFoodItem;