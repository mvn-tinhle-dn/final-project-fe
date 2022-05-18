import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import UserAuth from '../../../hooks/useAuth';
const { Header } = Layout;

export default function HeaderCP() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { logout } = UserAuth();

  function getItem(label, key, icon, onClick, children, type) {
    return {
      key,
      icon,
      onClick,
      children,
      label,
      type,
    };
  };

  const items = [
    getItem(<Link to='/account'>{user.email}</Link>, 'account', <UserOutlined />),
    getItem("Logout", 'logout', <LoginOutlined />, () => logout()),
  ];

  return (
    <Header className="header">
      <Menu key="menu-header" theme="dark" className="header-actions" items={items}>
      </Menu>
    </Header>
  );
}
