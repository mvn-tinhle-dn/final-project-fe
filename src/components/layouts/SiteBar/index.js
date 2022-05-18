import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "antd";
import {
  AlignLeftOutlined, PlusSquareOutlined, UserOutlined, BarChartOutlined
} from "@ant-design/icons";
import Sider from "antd/lib/layout/Sider";
import React from "react";

export default function SiteBarCP() {
  const location = useLocation();

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  };

  const items = [
    getItem(<NavLink to="/home">Dash Board</NavLink>, '/home', <BarChartOutlined />),
    getItem(<NavLink to="/home/products">Products List</NavLink>, '/home/products', <AlignLeftOutlined />),
    getItem(<NavLink to="/home/add">Add Product</NavLink>, '/home/add', <PlusSquareOutlined />),
    getItem(<NavLink to="/home/account">Account</NavLink>, '/home/account', <UserOutlined />),
  ];

  return (
    <Sider className="site-layout-background">
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={["/home"]}
        selectedKeys={[location.pathname]}
        className="menu-site-bar"
        items={items}
      />
    </Sider>
  );
}
