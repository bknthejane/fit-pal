"use client";

import React from "react";
import { Button, Form, Input, Select } from "antd";
import type { FormProps } from "antd";
import { useStyles } from "./style/style";

type FieldType = {
  fullName: string;
  email: string;
  contactNumber: string;
  sex: string;
  dateOfBirth: string;
  activeState: boolean;
};

const CreateClientPage: React.FC = () => {
  const { styles } = useStyles();
  const { Option } = Select;

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.PageWrapper}>
      <nav className={styles.NavBar}>
        <h2 className={styles.NavTitle}>Create New Client</h2>
      </nav>

      <div className={styles.FormWrapper}>
        <Form
          name="create-client"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className={styles.Form}
        >
          <Form.Item<FieldType>
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please input the full name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input the email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Contact Number"
            name="contactNumber"
            rules={[{ required: true, message: "Please input the contact number!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            name="sex"
            label="Sex"
            rules={[{ required: true, message: "Please select the sex!" }]}
          >
            <Select placeholder="Select gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item<FieldType>
            label="Date of Birth"
            name="dateOfBirth"
            rules={[{ required: true, message: "Please input the date of birth!" }]}
          >
            <Input type="date" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Active State"
            name="activeState"
            rules={[{ required: true, message: "Please input the active state!" }]}
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
