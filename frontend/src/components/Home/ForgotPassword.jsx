import { Button, Card, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";
import Homelayout from '../../layout/Homelayout';
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
const { Item } = Form;

const ForgotPassword = () => {

    const navigate = useNavigate()

    const [forgotForm] = Form.useForm();
    const [rePasswordForm] = Form.useForm();

    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(null);

    const onFinish = async (values) => {
        try {
            setLoading(true)
            const { data } = await axios.post("/api/user/login", values);
            console.log("Respons:", data);
            const { role } = data;
            if (role == "admin")
                toast.success("Admin Login Success")
            if (role == "user")
                return navigate("/app/user");

        } catch (err) {
            toast.error(err.response ? err.response.data.message : err.message);
            // "Backend error:"err.response.data.message |          "Frontend error:" err.message
        } finally {
            setLoading(false);
        }
    }


    return (
        <Homelayout>
            <div className="flex">
                <div className='w-1/2 hidden md:flex items-center justify-center'>
                    <img src="./exp-img.jpg" alt="Bank" className='w-4/5 object-contain' />
                </div>
                <div className='w-full md:w-1/2 flex items-center justify-center p-2 md:p-6 bg-white'>
                    <Card className='w-full max-w-sm shadow-xl'>
                        <h2 className='font-bold text-[#FF735C] text-2xl text-center mb-6'>
                            Forgot Password
                        </h2>
                        {
                            token ?
                          <Form
                            name="login-form"
                            layout='vertical'
                            onFinish={onFinish}
                            form={rePasswordForm}
                        >
                            <Item
                                name='password'
                                label="Password"
                                rules={[{ required: true }]}
                            >
                                <Input.Password prefix={<LockOutlined />} placeholder={'Enter your Password'} />
                            </Item>
                
                            <Item
                                name='re-password'
                                label="Re-Enter Password"
                                rules={[{ required: true }]}
                            >
                                <Input.Password prefix={<LockOutlined />} placeholder={'Enter your Password'} />
                            </Item>

                            <Item>
                                <Button
                                    type='text'
                                    htmlType='submit'
                                    block
                                    className='bg-[#FF735C]! text-white! font-bold! '
                                    loading={loading}
                                >
                                    Change Password
                                </Button>
                            </Item>
                        </Form>
                        :
                        <Form
                            name="login-form"
                            layout='vertical'
                            onFinish={onFinish}
                            form={forgotForm}
                        >
                            <Item
                                name='email'
                                label="Email"
                                rules={[{ required: true }]}
                            >
                                <Input prefix={<UserOutlined />} placeholder={'Enter your username'} />
                            </Item>

                            <Item>
                                <Button
                                    type='text'
                                    htmlType='submit'
                                    block
                                    className='bg-[#FF735C]! text-white! font-bold! '
                                    loading={loading}
                                >
                                    Submit
                                </Button>
                            </Item>
                        </Form>
                        
                        }


                        <div className='flex items-center justify-between'>
                            <Link
                                style={{ textDecoration: "underline" }}
                                className='text-[#FF735C]! font-bold'
                                to="/"
                            >Sign in</Link>

                            <Link
                                style={{ textDecoration: "underline" }}
                                className='text-[#FF735C]! font-bold'
                                to="/signup"
                            >Don't have an account?</Link>
                        </div>
                    </Card>
                </div>
            </div>
        </Homelayout>
    )
}

export default ForgotPassword;
