import { Form, Input, Button, Checkbox } from "antd";
import openNotificationWithIcon from "../../../components/animations";
import UserAuth from "../../../hooks/useAuth";

export default function Login() {
  localStorage.setItem("products", JSON.stringify([]));
  const arrType = [
    {
      id: 1,
      type: "Oxi & Lọc Nuớc",
    },
    {
      id: 2,
      type: "Đèn",
    },
    {
      id: 3,
      type: "Tiểu Cảnh",
    },
    {
      id: 4,
      type: "Thức ăn cá",
    },
    {
      id: 5,
      type: "Phân Nền",
    },
  ];

  localStorage.setItem("typeProds", JSON.stringify(arrType));

  const { login } = UserAuth();
  const data = [
    {
      email: "tinh.le@monstar-lab.com",
      password: "Tinhbayern304",
    },
    {
      email: "toan.luu@monstar-lab.com",
      password: "Toan123",
    },
    {
      email: "toan@123.com",
      password: "Toan123",
    },
  ];

  const handleOnSubmit = (values) => {
    const findInfo = data.find((item) => {
      return item.email === values.email && item.password === values.password;
    });

    if (findInfo === undefined) {
      openNotificationWithIcon("warning", "Email or Password does not exist!");
      return;
    } else {
      openNotificationWithIcon("success", "Logged in successfully!");
      login(values.email, values.password);
    }
  };

  return (
    <div className="container">
      <Form
        name="basic"
        className="form-login"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleOnSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
