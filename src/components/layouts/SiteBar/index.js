import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import {
  AlignLeftOutlined, PlusSquareOutlined, UserOutlined
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
    getItem(<NavLink to="/home">Products List</NavLink>, 'product', <AlignLeftOutlined />),
    getItem(<NavLink to="/home/add">Add Product</NavLink>, 'add', <PlusSquareOutlined />),
    getItem(<NavLink to="/home/account">Account</NavLink>, 'account', <UserOutlined />),
  ];

  return (
    <Sider className="site-layout-background">
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={["product"]}
        // defaultOpenKeys={["product"]}
        // selectedKeys={items}
        className="menu-site-bar"
        items={items}
      />
    </Sider>
  );
}
