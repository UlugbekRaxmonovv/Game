import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Input, Button, Typography, Card, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import ProductTop from  '../components/ProductTop/index'
const { Title, Text } = Typography;

const Register = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post(`${apiUrl}/api/register/`, {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      message.success("Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi!");
      navigate("/login");
    } catch (error) {
      message.error("Ro‘yxatdan o‘tishda xatolik yuz berdi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
     <ProductTop/>
      <Card className=" max-w-md p-2 shadow-lg rounded-lg bg-light-white backdrop-blur-[15px]  w-[400px] h-full">
      <Title level={3} className="tex text-center  text-2xl font-semibold z-50">
          Ro‘yxatdan o‘tish
        </Title>
        <Form layout="vertical" onFinish={onFinish} className="space-y-3">
        <Form.Item
            label={<Text className="text-white">Foydalanuvchi nomi</Text>}
            name="username"
            rules={[{ required: true, message: "Foydalanuvchi nomini kiriting!" }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-400" />}
              placeholder="Foydalanuvchi nomi"
              className="h-10"
            />
          </Form.Item>

          <Form.Item
            label={<Text className="text-white">Email</Text>}
            name="email"
            
            rules={[
              { required: true, message: "Emailni kiriting!" },
              { type: "email", message: "To‘g‘ri email formatini kiriting!" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-gray-400" />}
              placeholder="Email"
              className="h-10"
            />
          </Form.Item>

          <Form.Item
            label={<Text className="text-white">Parol</Text>}
            name="password"
            rules={[{ required: true, message: "Parolni kiriting!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="Parol"
              className="h-10"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          <Form.Item
            label={<Text className="text-white">Parolni tasdiqlang</Text>}
            name="confirmPassword"
            dependencies={["password"]}
            
            rules={[
              { required: true, message: "Parolni tasdiqlang!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Parollar mos kelmadi!"));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="Parolni tasdiqlang"
              className="h-10"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
             className="h-10"
              loading={loading}
            >
              {loading ? "Yuklanmoqda..." : "Ro'yhatdan o'tish"}
            </Button>
          </Form.Item>
        </Form>

        <Text className="block text-center text-base text-white">
          Allaqachon ro‘yxatdan o‘tganmisiz?{" "}
          <Text strong className="text-blue-500 cursor-pointer hover:underline" onClick={() => navigate("/login")}>
            Kirish
          </Text>
        </Text>
      </Card>
     
    </div>
  );
};

export default Register;
