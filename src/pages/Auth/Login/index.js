import { Form, Input, Button, Checkbox } from "antd";
import openNotificationWithIcon from "../../../components/animations";
import UserAuth from "../../../hooks/useAuth";

export default function Login() {
  const products = [
    {
      id: 1,
      name: "Lọc Sủi Vi Sinh QS-200A",
      type: "Oxi & Lọc Nuớc",
      num: 4,
      price: "1500000",
      url: "https://thuysinhdanang.vn/wp-content/uploads/2020/08/download-2.jpg",
      des: "Lọc Bông Bio QanVee QS-200A loại lọc vi sinh cao cấp dành cho hồ cá cảnh và thủy sinh, đặc biệt anh em nuôi tép rất yêu thích loại lọc bio này bởi tính tiện dụng của QanVee QS-200A",
    },
    {
      id: 2,
      name: "BỘ ĐÈN TRƯNG TIỂU CẢNH XINMA",
      type: "Đèn",
      num: 15,
      price: "1300000",
      url: "https://thuysinhdanang.vn/wp-content/uploads/2020/09/O1CN01UuGulL1kpl9atxp2X_733654733-768x649.jpg",
      des: "– Công suất đèn : 12W , Ánh sáng trắng .",
    },
    {
      id: 3,
      name: "Bình Co2 3kg + Van Điện Mufan",
      type: "Oxi & Lọc Nuớc",
      num: 4,
      url: "https://thuysinhdanang.vn/wp-content/uploads/2020/08/103077172_2976619269091476_2510197048428963327_o.jpg",
      price: "1200000",
      des: "Van điện Mufan kèm đếm giọt và van 1 chiều",
    },
    {
      id: 4,
      name: "Lọc Sủi Vi Sinh QS-200A",
      type: "Oxi & Lọc Nuớc",
      num: 4,
      price: "1500000",
      url: "https://thuysinhdanang.vn/wp-content/uploads/2020/08/download-2.jpg",
      des: "Lọc Bông Bio QanVee QS-200A loại lọc vi sinh cao cấp dành cho hồ cá cảnh và thủy sinh, đặc biệt anh em nuôi tép rất yêu thích loại lọc bio này bởi tính tiện dụng của QanVee QS-200A",
    },
    {
      id: 5,
      name: "BỘ ĐÈN TRƯNG TIỂU CẢNH XINMA",
      type: "Đèn",
      num: 15,
      price: "1300000",
      url: "https://thuysinhdanang.vn/wp-content/uploads/2020/09/O1CN01UuGulL1kpl9atxp2X_733654733-768x649.jpg",
      des: "– Công suất đèn : 12W , Ánh sáng trắng .",
    },
    {
      id: 6,
      name: "Bình Co2 3kg + Van Điện Mufan",
      type: "Oxi & Lọc Nuớc",
      num: 4,
      url: "https://thuysinhdanang.vn/wp-content/uploads/2020/08/103077172_2976619269091476_2510197048428963327_o.jpg",
      price: "1200000",
      des: "Van điện Mufan kèm đếm giọt và van 1 chiều",
    },
    {
      id: 7,
      name: "Lọc Sủi Vi Sinh QS-200A",
      type: "Oxi & Lọc Nuớc",
      num: 4,
      price: "1500000",
      url: "https://thuysinhdanang.vn/wp-content/uploads/2020/08/download-2.jpg",
      des: "Lọc Bông Bio QanVee QS-200A loại lọc vi sinh cao cấp dành cho hồ cá cảnh và thủy sinh, đặc biệt anh em nuôi tép rất yêu thích loại lọc bio này bởi tính tiện dụng của QanVee QS-200A",
    },
    {
      id: 8,
      name: "BỘ ĐÈN TRƯNG TIỂU CẢNH XINMA",
      type: "Đèn",
      num: 15,
      price: "1300000",
      url: "https://thuysinhdanang.vn/wp-content/uploads/2020/09/O1CN01UuGulL1kpl9atxp2X_733654733-768x649.jpg",
      des: "– Công suất đèn : 12W , Ánh sáng trắng .",
    },
    {
      id: 9,
      name: "Bình Co2 3kg + Van Điện Mufan",
      type: "Oxi & Lọc Nuớc",
      num: 4,
      url: "https://thuysinhdanang.vn/wp-content/uploads/2020/08/103077172_2976619269091476_2510197048428963327_o.jpg",
      price: "1200000",
      des: "Van điện Mufan kèm đếm giọt và van 1 chiều",
    },
  ]
  localStorage.setItem("products", JSON.stringify(products));
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
      return item.email.toLowerCase() === values.email.toLowerCase() && item.password === values.password;
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
        <h1 className="login-title">Login</h1>
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
