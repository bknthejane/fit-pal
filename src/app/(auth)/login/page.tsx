'use client';

import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useStyles } from './style/style';
import Navbar from '@/app/components/navbar/page';
import Footer from '@/app/components/footer/page';
import { IUser } from '@/providers/authProvider/context';
import { useUserActions, useUserState } from '@/providers/authProvider';

const LoginPage: React.FC = () => {
    const { styles } = useStyles();
    const { loginUser } = useUserActions();
    const { isPending, isError } = useUserState();

    const onFinish: FormProps<IUser>['onFinish'] = (values) => {
        const userDetails: IUser = {
            email: values.email,
            password: values.password,
        };
        loginUser(userDetails);
    };

    const onFinishFailed: FormProps<IUser>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className={styles.PageContainer}>
                <Navbar />

                <main className={styles.Content}>
                    <div className={styles.FormContainer}>
                        {isPending && <div>Loading...</div>}
                        {isError && <div>Error logging in</div>}
                        {!isPending && !isError && (
                            <>
                                <div className={styles.FormHeader}>
                                    <h2 className={styles.FormTitle}>Welcome back!</h2>
                                    <p className={styles.FormSubtitle}>
                                        Sign in to your FitPal account
                                    </p>
                                </div>

                                <Form
                                    name="login"
                                    layout="vertical"
                                    initialValues={{ userType: 'trainer', accetPolicies: false }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item<IUser>
                                        label={<span className={styles.FieldLabel}>Email</span>}
                                        name="email"
                                        rules={[
                                            { required: true, message: 'Please input your email!' },
                                            { type: 'email', message: 'Please enter a valid email!' },
                                        ]}
                                        className={styles.FormItem}
                                    >
                                        <Input placeholder="you@example.com" size="large" className={styles.Input} />
                                    </Form.Item>

                                    <Form.Item<IUser>
                                        label={<span className={styles.FieldLabel}>Password</span>}
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        className={styles.FormItem}
                                    >
                                        <Input.Password placeholder="••••••••" size="large" className={styles.Input} />
                                    </Form.Item>

                                    <Form.Item className={styles.SubmitFormItem}>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            size="large"
                                            block
                                            className={styles.SubmitButton}
                                        >
                                            Sign in
                                        </Button>
                                    </Form.Item>

                                    <div className={styles.RegisterLinkContainer}>
                                        <p className={styles.RegisterLinkText}>
                                            Don&apos;t have an account?{' '}
                                            <a href="/signup" className={styles.RegisterLink}>
                                                Register
                                            </a>
                                        </p>
                                    </div>
                                </Form>
                            </>
                        )}
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default LoginPage;
