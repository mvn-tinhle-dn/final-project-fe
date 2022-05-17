import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import {
  AlignLeftOutlined, PlusSquareOutlined, UserOutlined, BarChartOutlined
} from "@ant-design/icons";
import Sider from "antd/lib/layout/Sider";
import React from "react";

export default function SiteBarCP() {
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
    getItem(<NavLink to="/home">Dash Board</NavLink>, 'dashboard', <BarChartOutlined />),
    getItem(<NavLink to="/home/products">Products List</NavLink>, 'product', <AlignLeftOutlined />),
    getItem(<NavLink to="/home/add">Add Product</NavLink>, 'add', <PlusSquareOutlined />),
    getItem(<NavLink to="/home/account">Account</NavLink>, 'account', <UserOutlined />),
  ];

  return (
    <Sider className="site-layout-background">
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={["dashboard"]}
        className="menu-site-bar"
        items={items}
      />
    </Sider>
  );
}
