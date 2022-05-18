import {
  Input, Modal, Space,
  Table
} from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import openNotificationWithIcon from "../../components/animations";
const { Search } = Input;

export default function ProductsL() {
  const arrType = JSON.parse(localStorage.getItem("typeProds"));
  const [dataSource, setDataSource] = useState(
    JSON.parse(localStorage.getItem("products"))
  );
  //Processing data
  const dataShow = dataSource.map((item, index) => {
    return (item = { ...item, key: item.id, no: index + 1 });
  });
  //set data column type
  const filterType = arrType.map((item) => {
    return {
      text: item.type,
      value: `${item.type}`,
    };
  });
  //data table
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Photo",
      dataIndex: "url",
      render: (url) => <img className="img-product" src={url} alt="" />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Num",
      dataIndex: "num",
      key: "num",
      sorter: (a, b) => a.num - b.num,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      filters: filterType,
      onFilter: (value, record) => record.type.indexOf(value) === 0,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Link to={`/products/${record.id}`}> <button className="btn btn-view"><EyeOutlined /></button></Link>
          <Link to={`/edit/${record.id}`}><button className="btn btn-edit"><EditOutlined /></button></Link>
          <button className="btn btn-delete" onClick={() => showModal(record)}><DeleteOutlined /></button>
        </Space>
      ),
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isProdCur, setIsProdCur] = useState({});
  //on,of modal
  const showModal = (product) => {
    setIsModalVisible(true);
    setIsProdCur(product);
  };

  //delete
  function handleDeleteProd(product) {
    setIsModalVisible(false);
    const currentDataS = dataSource.filter((item) => item.id !== product.id);
    localStorage.setItem("products", JSON.stringify(currentDataS));
    setDataSource(currentDataS);
    openNotificationWithIcon("success", "Delete Product");
  }

  //search
  const onSearch = (e) => {
    let valueSearch = e.target.value.toLowerCase();
    if (e.target.value === "") {
      setDataSource(JSON.parse(localStorage.getItem("products")));
    } else {
      const arrSearch = dataSource.filter((item) => {
        const nameProd = item.name.toLowerCase();
        return nameProd.includes(valueSearch);
      });
      setDataSource(arrSearch);
    }
  };

  return (
    <div className="product-list">
      <h1 className="title-page">Products</h1>
      {/* Search */}
      <Space direction="vertical" className="input-search">
        <Search
          name="search"
          placeholder="Search Name...."
          allowClear
          size="large"
          onChange={onSearch}
        />
      </Space>

      <Table dataSource={dataShow} columns={columns} />
      {/* Modal Delete */}
      <Modal
        title="Delete Product"
        visible={isModalVisible}
        onOk={() => {
          handleDeleteProd(isProdCur);
        }}
        onCancel={() => setIsModalVisible(false)}
      >
        Are You Sure ?
      </Modal>
    </div>
  );
}
