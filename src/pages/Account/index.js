import { Form } from "antd";
import { UserOutlined } from '@ant-design/icons';

export default function Account() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="account">
      <h1 className="title-page">Account</h1>
      <Form className="form-account">
        <Form.Item>
          <img src="https://ca.slack-edge.com/T7Z35JWLQ-U035U5L732B-3e102acf6cef-512" alt="" className="img-avatar" />
        </Form.Item>
        <Form.Item>
          <label><UserOutlined/> {user.email}</label>
        </Form.Item>
      </Form>
    </div>
  )
}
