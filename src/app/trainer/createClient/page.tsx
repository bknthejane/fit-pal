"use client";

import React from "react";
import { Button, Form, Input, Select, message } from "antd";
import type { FormProps } from "antd";
import { useStyles } from "./style/style";
import { IClient } from '@/providers/clientProvider/context';
import { useClientActions } from "@/providers/clientProvider";

const CreateClientPage: React.FC = () => {
  const { styles } = useStyles();
  const { Option } = Select;
  const { createClient } = useClientActions()
  const [form] = Form.useForm();

  const onFinish: FormProps<IClient>["onFinish"] = async (values) => {
    try {
      const trainerId = sessionStorage.getItem("userId") || "";
      const clientData = { ...values, trainerId };
      createClient(clientData);
      form.resetFields();
    } catch (error) {
      console.log("Form submission failed:", error);
    }
  };

  const onFinishFailed: FormProps<IClient>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error('Please check all required fields');
  };

  return (
    <div className={styles.PageWrapper}>
      <nav className={styles.NavBar}>
        <h2 className={styles.NavTitle}>Create New Client</h2>
      </nav>

      <div className={styles.FormWrapper}>
        <Form
          form={form}
          name="create-client"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
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
            name="sex"
            label="Sex"
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

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Create Client
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreateClientPage;