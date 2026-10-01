import { Button, Card, Form, Input } from 'antd';
import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import Homelayout from '../../layout/Homelayout';
import { Link } from 'react-router-dom';
import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

// console.log("BASE URL:", import.meta.env.VITE_BASE_URL);
const {Item} = Form;

const Signup = () => {
    const onFinish = async (values)=>{
        try{
            const {data} = await axios.post("/api/user/signup", values);
            console.log("Respons:",data);
        }catch(error){
            console.log("this is an error:",error)
    // console.log("STATUS:", error.response?.status);
    // console.log("BACKEND ERROR:", error.response?.data);
}
    }

    return (
        <Homelayout>
            <div className='flex'>
            <div className="w-1/2 hidden md:flex items-center justify-center">
                <img src="./exp-img.jpg" alt="Bank" className='w-4/5 object-contain' />
            </div>
            <div className='w-full md:w-1/2 flex items-center justify-center p-2 md:p-6 bg-white '>
                <Card className='w-full max-w-sm shadow-xl'>
                    <h2 className='font-bold text-[3FF735C] tedt-2xl text-center mb:p-6 bg-white '>
                        Track your Expense
                    </h2>
                    <Form
                    name='login-form'
                    layout='vertical'
                    onFinish={onFinish}
                    >
                        
                        <Item
                        name="fullName"
                        label="Full Name"
                        rules={[{required: true}]}
                        >
                            <Input prefix={<UserOutlined/>} placeholder={'Enter your fullname'} />
                        </Item>
                        <Item
                        name="mobile"
                        label="Mobile"
                        rules={[{required: true}]}
                        >
                            <Input prefix={<PhoneOutlined/>} placeholder={'Enter your mobile'} />
                        </Item>
                        <Item
                        name="email"
                        label="Email"
                        rules={[{required: true}]}
                        >
                            <Input prefix={<UserOutlined/>} placeholder={'Enter your username'} />
                        </Item>

                        <Item
                        name='password'
                        label="Password"
                        rules={[{required: true}]}
                        >
                            <Input.Password prefix={<LockOutlined/>} placeholder={'Enter your Password'} />
                        </Item>
                        <Item>
                            <Button
                            type='text'
                            htmlType='submit'
                            block
                            className='bg-[#FF735C]! text-white font-bold'>
                                SignUp
                            </Button>
                        </Item>
                    </Form>
                    <div className='flex items-center justify-center'>
                    <Link
                    style={{textDecoration: "underline"}}
                    className="text-[#FF735C]! font-bold"
                    to='/'
                    >Already have an account</Link>
                    </div>
                </Card>
            </div>
        </div>
        </Homelayout>
    )
}

export default Signup;
