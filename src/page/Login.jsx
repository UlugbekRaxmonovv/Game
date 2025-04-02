import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import { Form, Button, Input, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    setLoading(true);
    
    try {
      const response = await axios.post(`${apiUrl}/api/login/`, values);
      localStorage.setItem("token", response.data.access);
      localStorage.setItem("isAuth", "true");
      message.success("Muvaffaqiyatli tizimga kirdingiz!");
      navigate("/dashboard");
    } catch (error) {
      message.error("Login yoki parol noto‘g‘ri!");
    } finally {
      setLoading(false);
    }
  };

  if (localStorage.getItem("isAuth") === "true") {
    navigate("/dashboard");
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
      sx={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          width: 400,
          padding: 4,
          borderRadius: 3,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ color: "white", mb: 3 }}>
          Tizimga kirish
        </Typography>

        <Form onFinish={onFinish} layout="vertical">
          <Form.Item
            label={<Typography color="white">Foydalanuvchi nomi</Typography>}
            name="username"
            rules={[{ required: true, message: "Foydalanuvchi nomini kiriting!" }]}
          >
            <Input
              prefix={<UserOutlined className="text-gray-400" />}
              placeholder="Foydalanuvchi nomi"
              size="large"
            />
          </Form.Item>

          <Form.Item
            label={<Typography color="white">Parol</Typography>}
            className="-mt-4"
            name="password"
            rules={[{ required: true, message: "Parolni kiriting!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-gray-400" />}
              placeholder="Parol"
              size="large"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" block size="large" loading={loading}>
            {loading ? "Yuklanmoqda..." : "Kirish"}
          </Button>
        </Form>

        <Typography sx={{ mt: 3, color: "white" }}>
          <span className="text-blue-300 cursor-pointer hover:underline" onClick={() => navigate("/register")}>
            Ro‘yxatdan o‘tish
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
