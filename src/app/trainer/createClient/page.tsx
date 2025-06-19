'use client';

import React from "react";
import { Button, Form, Input, Select, message, Card } from "antd";
import type { FormProps } from "antd";
import { useStyles } from "./style/style";
import { IClient } from '@/providers/clientProvider/context';
import { useClientActions } from "@/providers/clientProvider";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const CreateClientPage: React.FC = () => {
  const { styles } = useStyles();
  const { Option } = Select;
  const { createClient } = useClientActions();
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish: FormProps<IClient>["onFinish"] = async (values) => {
    try {
      const trainerId = sessionStorage.getItem("userId") || "";
      const clientData = { ...values, trainerId };

      await createClient(clientData);
      message.success("Client created successfully");
      form.resetFields();

      router.push('/trainer/clients');
    } catch (error) {
      console.error("Client creation failed:", error);
      message.error("Something went wrong while creating the client.");
    }
  };

  const onFinishFailed: FormProps<IClient>["onFinishFailed"] = (errorInfo) => {
    console.log("Form validation failed:", errorInfo);
    message.error("Please check all required fields.");
  };

  const handleBack = () => {
    router.push('/trainer/clients');
  };

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
            Back to Clients
          </Button>
        </div>
      </div>

      <div className={styles.ContentWrapper}>
        <Card title="Create New Client">
          <Form
            form={form}
            name="create-client"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={styles.Form}
          >
            <Form.Item<IClient>
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: "Please input the full name!" }]}
            >
              <Input placeholder="Enter full name" />
            </Form.Item>

            <Form.Item<IClient>
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input the email!" },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input placeholder="Enter email address" />
            </Form.Item>

            <Form.Item<IClient>
              label="Contact Number"
              name="contactNumber"
              rules={[{ required: true, message: "Please input the contact number!" }]}
            >
              <Input placeholder="Enter contact number" />
            </Form.Item>

            <Form.Item<IClient>
              label="Sex"
              name="sex"
              rules={[{ required: true, message: "Please select the sex!" }]}
            >
              <Select placeholder="Select gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </Form.Item>

            <Form.Item<IClient>
              label="Date of Birth"
              name="dateOfBirth"
              rules={[{ required: true, message: "Please input the date of birth!" }]}
            >
              <Input type="date" />
            </Form.Item>

            <Form.Item<IClient>
              label="Active State"
              name="activeState"
              rules={[{ required: true, message: "Please select the active state!" }]}
            >
              <Select placeholder="Select status">
                <Option value={true}>Active</Option>
                <Option value={false}>Inactive</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Client
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default CreateClientPage;
