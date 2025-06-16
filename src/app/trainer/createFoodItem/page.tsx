'use client';
import React from 'react';
import { Button, Card, Form, Input, Select } from 'antd';
import type { FormProps } from 'antd';
import { useStyles } from './style/style';



const CreateFoodItem: React.FC = () => {

    const { Option } = Select;

    type FieldType = {
        name?: string;
        protein?: number;
        carbs?: number;
        sugar?: number;
        fat?: number;
        fiber?: number;
        sodium?: number;
        potassium?: number;
        category?: string;
        servingSize?: number;
        cholestorol?: number;
        energy?: number;
    };
    const [form] = Form.useForm();
    const { styles } = useStyles();

    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
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
                    <Form.Item 
                        name="name" 
                        label="Name" 
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item 
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
                    <Form.Item 
                        name="protein" 
                        label="Protein (g)" 
                        rules={[{ required: true }]}
                    >
                        <Input type="number" step="0.1" />
                    </Form.Item>
                    <Form.Item 
                        name="carbs" 
                        label="Carbs (g)" 
                        rules={[{ required: true }]}
                    >
                        <Input type="number" step="0.1" />
                    </Form.Item>
                    <Form.Item 
                        name="fat" 
                        label="Fat (g)" 
                        rules={[{ required: true }]}
                    >
                        <Input type="number" step="0.1" />
                    </Form.Item>
                    <Form.Item 
                        name="energy" 
                        label="Energy (kcal)" 
                        rules={[{ required: true }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item 
                        name="servingSize" 
                        label="Serving Size (g)" 
                        rules={[{ required: true }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item 
                        name="sugar" 
                        label="Sugar (g)"
                    >
                        <Input type="number" step="0.1" />
                    </Form.Item>
                    <Form.Item 
                        name="fiber" 
                        label="Fiber (g)"
                    >
                        <Input type="number" step="0.1" />
                    </Form.Item>
                    <Form.Item 
                        name="sodium" 
                        label="Sodium (mg)"
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item 
                        name="potassium" 
                        label="Potassium (mg)"
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item 
                        name="cholestorol" 
                        label="Cholesterol (mg)"
                    >
                        <Input type="number" />
                    </Form.Item>
                </div>
                <Form.Item 
                    className={styles.SubmitWrapper}
                >
                    <Button type="primary" htmlType="submit" block size="large">
                        Create Food Item
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default CreateFoodItem;
