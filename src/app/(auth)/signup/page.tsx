'use client';

import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Radio, message } from 'antd';
import { useStyles } from './style/style';
import Navbar from '@/app/components/navbar/page';
import Footer from '@/app/components/footer/page';
import { useUserState, useUserActions } from '@/providers/authProvider';
import { IUser } from '@/providers/authProvider/context';

const SignupPage: React.FC = () => {
  const { styles } = useStyles();
  const { registerUser } = useUserActions();
  const { isPending, isError } = useUserState();
  const [selectedRole, setSelectedRole] = useState<string>('client');
  const [form] = Form.useForm();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error registering user</div>;

  const onFinish: FormProps<IUser>['onFinish'] = (values) => {
    const newUser: IUser = {
      name: values.name,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      contactNumber: values.contactNumber,
      dateOfBirth: values.dateOfBirth || '',
      role: values.role,
      planType: 'base',
      activeState: true,
      trial: false,
      policiesAccepted: values.policiesAccepted,
    };
    registerUser(newUser);
  };

  const onFinishFailed: FormProps<IUser>['onFinishFailed'] = (errorInfo) => {
    message.error('Please fill in all required fields correctly');
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className={styles.PageContainer}>
        <Navbar />

        <main className={styles.Content}>
          <div className={styles.FormContainer}>
            <div className={styles.FormHeader}>
              <h2 className={styles.FormTitle}>Create your account</h2>
              <p className={styles.FormSubtitle}>
                Join FitPal to manage clients and meal plans efficiently
              </p>
            </div>

            <Form
              form={form}
              name="registration"
              layout="vertical"
              initialValues={{ role: 'client', policiesAccepted: false }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className={styles.UserTypeSection}>
                <label className={styles.UserTypeLabel}><strong>I am a:</strong></label>
                <Form.Item<IUser>
                  name="role"
                  className={styles.UserTypeFormItem}
                >
                  <Radio.Group
                    onChange={(e) => setSelectedRole(e.target.value)}
                    value={selectedRole}
                  >
                    <Radio value="admin" className={styles.RadioOption}>Trainer</Radio>
                    <Radio value="client" className={styles.RadioOption}>Client</Radio>
                  </Radio.Group>
                </Form.Item>
              </div>

              <Form.Item<IUser>
                label={<span className={styles.FieldLabel}>Name</span>}
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
                className={styles.FormItem}
              >
                <Input placeholder="John Doe" size="large" className={styles.Input} />
              </Form.Item>

              <Form.Item<IUser>
                label={<span className={styles.FieldLabel}>Email</span>}
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
                className={styles.FormItem}
              >
                <Input placeholder="you@example.com" size="large" className={styles.Input} />
              </Form.Item>

              <Form.Item<IUser>
                label={<span className={styles.FieldLabel}>Contact Number</span>}
                name="contactNumber"
                rules={[{ required: true, message: 'Please input your contact number!' }]}
                className={styles.FormItem}
              >
                <Input placeholder="+27 12 345 6789" size="large" className={styles.Input} />
              </Form.Item>

              <Form.Item<IUser>
                label={<span className={styles.FieldLabel}>Password</span>}
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                className={styles.FormItem}
              >
                <Input.Password placeholder="••••••••" size="large" className={styles.Input} />
              </Form.Item>

              <Form.Item<IUser>
                label={<span className={styles.FieldLabel}>Confirm Password</span>}
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The passwords do not match!'));
                    },
                  }),
                ]}
                className={styles.FormItem}
              >
                <Input.Password placeholder="••••••••" size="large" className={styles.Input} />
              </Form.Item>

              {selectedRole === 'client' && (
                <Form.Item<IUser>
                  label={<span className={styles.FieldLabel}>Date of Birth</span>}
                  name="dateOfBirth"
                  rules={[{ required: true, message: 'Please input your date of birth!' }]}
                  className={styles.FormItem}
                >
                  <Input type="date" size="large" className={styles.Input} placeholder="YYYY-MM-DD" />
                </Form.Item>
              )}

              <Form.Item<IUser>
                name="policiesAccepted"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error('Please accept the policies!')),
                  },
                ]}
                className={styles.CheckboxFormItem}
              >
                <Checkbox className={styles.Checkbox}>
                  I accept the FitPal policies
                </Checkbox>
              </Form.Item>

              <Form.Item className={styles.SubmitFormItem}>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  className={styles.SubmitButton}
                >
                  Create account
                </Button>
              </Form.Item>

              <div className={styles.LoginLinkContainer}>
                <p className={styles.LoginLinkText}>
                  Already have an account?{' '}
                  <a href="#" className={styles.LoginLink}>
                    Log in
                  </a>
                </p>
              </div>
            </Form>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SignupPage;
