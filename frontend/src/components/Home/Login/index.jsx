import { Button, Card, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
const { Item } = Form;

const Login = () => {

    const [loginForm] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        try {
            setLoading(true)
            const { data } = await axios.post("/api/user/login", values);
            console.log("Respons:",data);
            toast.success("Login Success")

        } catch (err) {
            toast.error(err.response ?  err.response.data.message : err.message );
            // "Backend error:"err.response.data.message |          "Frontend error:" err.message
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="flex">
            <div className='w-1/2 hidden md:flex items-center justify-center'>
                <img src="./exp-img.jpg" alt="Bank" className='w-4/5 object-contain' />
            </div>
            <div className='w-full md:w-1/2 flex items-center justify-center p-2 md:p-6 bg-white'>
                <Card className='w-full max-w-sm shadow-xl'>
                    <h2 className='font-bold text-[#FF735C] text-2xl text-center mb-6'>
                        Track Your Expense
                    </h2>
                    <Form
                        name="login-form"
                        layout='vertical'
                        onFinish={onFinish}
                        form={loginForm}
                    >
                        <Item
                            name='email'
                            label="User Email"
                            rules={[{ required: true }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder={'Enter your username'} />
                        </Item>

                        <Item
                            name='password'
                            label="Password"
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
                                Login   
                            </Button>
                        </Item>
                    </Form>

                    <div className='flex items-center justify-between'>
                        <Link
                            style={{ textDecoration: "underline" }}
                            className='text-[#FF735C]! font-bold'
                            to="#"
                        >Forgot Password</Link>

                        <Link
                            style={{ textDecoration: "underline" }}
                            className='text-[#FF735C]! font-bold'
                            to="/signup"
                        >Don't have an account</Link>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Login
