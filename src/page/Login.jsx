import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../src/api/index";
import { Box, Typography } from "@mui/material";
import { Form, Button, Input } from "antd";
import { toast } from "react-hot-toast";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";


const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const user = {
      username: values.username,
      password: values.password,
    };
  
    if (values.username === "john32" && values.password === "87654321") {
      toast.success("Welcome");
      const token = "your_dummy_token"; 
      localStorage.setItem("x-auth-token", token);
      navigate('/dashboard/statestika');
     
    } else {
      toast.error("Invalid Username or Password");
    }
  };
  

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    toast.error("Iltimos, barcha maydonlarni to‘g‘ri to‘ldiring!");
  };





     // try {
    //   const response = await axios.post('auth/login/', user, {
    //     headers: { "Content-Type": "application/json" },
    //   });

    //   console.log("Server javobi:", response.data);

    //   if (response.data?.accessToken) {
    //     localStorage.setItem("x-auth-token", response.data.accessToken);
    //     localStorage.setItem("user", response.data?.user?.email || "");
    //     toast.success("Muvaffaqiyatli kirildi!");
    //     navigate("/dashboard/statestika");
    //   } else {
    //     toast.error("Login yoki parol noto‘g‘ri");
    //   }
    // } catch (error) {
    //   console.error("Xato:", error);
    //   toast.error("Server bilan bog‘lanishda xatolik yuz berdi");
    // } finally {
    //   setLoading(false);
    // }

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
        }}
      >
        <Typography variant="h5" sx={{ color: "white", mb: 3, textAlign: "center" }}>
          Tizimga kirish
        </Typography>

        <Form onFinish={onFinish} layout="vertical" onFinishFailed={onFinishFailed}>
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
          <span
            className="text-blue-300 cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Ro‘yxatdan o‘tish
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
