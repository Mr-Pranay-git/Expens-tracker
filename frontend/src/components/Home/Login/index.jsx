import { Button, Card, Form, Input } from 'antd';
import {UserOutlined, LockOutlined} from "@ant-design/icons";
import React from 'react';
import { Link } from 'react-router-dom';
const {Item} = Form;

const Login = () => {
    return (
        <div className="flex">
            <div className='w-1/2 hidden md:flex items-center justify-center'>
            <img src="./exp-img.jpg" alt="Bank" className='w-4/5 object-contain'/>
            </div>
            <div className='w-full md:w-1/2 flex items-center justify-center p-2 md:p-6 bg-white'>
                <Card className='w-full max-w-sm shadow-xl'>
                    <h2 className='font-bold text-[#FF735C] text-2xl text-center mb-6'>
                        Track Your Expense
                    </h2>
                    <Form
                    name="login-form"
                    layout='vertical'
                    >
                        <Item
                        name='name'
                        label="Username"
                        rules={[{required:true}]}
                        >
                            <Input prefix={<UserOutlined/>} placeholder={'Enter your username'} />
                        </Item>
                        
                        <Item
                        name='password'
                        label="Password"
                        rules={[{required:true}]}
                        >
                            <Input.Password prefix={<LockOutlined/>} placeholder={'Enter your Password'} />
                        </Item>
                        <Item>
                            <Button
                            type='text'
                            htmlType='submit'
                            block   
                            className='bg-[#FF735C]! text-white! font-bold '>
                                Login
                            </Button>
                        </Item>
                    </Form>

                    <div className='flex items-center justify-between'>
                        <Link 
                    style={{textDecoration: "underline"}}
                    className='text-[#FF735C]! font-bold'
                    to="#"
                    >Forgot Password</Link>

                    <Link
                    style={{textDecoration: "underline"}}
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
