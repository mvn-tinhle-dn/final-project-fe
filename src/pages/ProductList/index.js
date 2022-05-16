import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
  Table,
} from "antd";
import React, { useState } from "react";
import openNotificationWithIcon from "../../components/animations";
const { Search } = Input;

export default function ProductsL() {
  //col item
  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const arrType = JSON.parse(localStorage.getItem("typeProds"));
  const [url, setUrl] = useState("");
  const [dataSource, setDataSource] = useState(
    JSON.parse(localStorage.getItem("products"))
  );
  //Processing data
  const dataShow = dataSource.map((item, index) => {
    return (item = { ...item, key: item.id, no: index + 1 });
  });
  const arrEdit = dataSource;
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
          <button className="btn btn-view" onClick={() => showModal2(record)}>Detail</button>
          <button className="btn btn-edit" onClick={() => showModal1(record)}>Edit</button>
          <button className="btn btn-delete" onClick={() => showModal(record)}>Delete</button>
        </Space>
      ),
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isProdCur, setIsProdCur] = useState({});
  //on,of modal
  const showModal = (product) => {
    setIsModalVisible(true);
    setIsProdCur(product);
  };

  const showModal1 = (product) => {
    setIsModalVisible1(true);
    setIsProdCur(product);
  };
  const showModal2 = (product) => {
    setIsModalVisible2(true);
    setIsProdCur(product);
  };
  //upload img
  const onChange = (e) => {
    let files = e.target.files;
    if (files[0].size < 1000000) {
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        setUrl(e.target.result);
      };
    } else {
      openNotificationWithIcon("warning", "Please choose image size < 1MB");
    }
  };
  //delete
  function handleDeleteProd(product) {
    setIsModalVisible(false);
    const currentDataS = dataSource.filter((item) => item.id !== product.id);
    localStorage.setItem("products", JSON.stringify(currentDataS));
    setDataSource(currentDataS);
    openNotificationWithIcon("success", "Delete Product");
  }
  //update
  function onFinish(values) {
    const currentValue = arrEdit.find((item) => item.id === isProdCur.id);
    const indexValue = arrEdit.indexOf(currentValue);
    arrEdit[indexValue].name = values.name;
    arrEdit[indexValue].type = values.type;
    arrEdit[indexValue].num = values.num;
    arrEdit[indexValue].des = values.des;
    url === "" ? arrEdit[indexValue].url = isProdCur.url : arrEdit[indexValue].url = url;
    localStorage.setItem("products", JSON.stringify(arrEdit));
    setIsModalVisible1(false);
    openNotificationWithIcon("success", "Update Product");
  }
  //search
  const onSearch = (e) => {
    if (e.target.value === "") {
      setDataSource(JSON.parse(localStorage.getItem("products")));
    } else {
      let valueSearch = e.target.value.toLowerCase();
      const arrSearch = dataShow.filter((item) => {
        const nameProd = item.name.toLowerCase();
        return nameProd.includes(valueSearch);
      });
      setDataSource(arrSearch);
    }
  };

  return (
    <div className="product-list">
      <h1 className="title-page">Products</h1>
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
      {/* Modal Edit */}
      <Modal
        title="Edit Product"
        visible={isModalVisible1}
        destroyOnClose={true}
        onCancel={() => setIsModalVisible1(false)}
        footer={null}
      >
        <Form {...layout} initialValues={isProdCur} onFinish={onFinish}>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="type" label="Type">
            <Select
              label="Type"
              showSearch
              value={isProdCur.type}
              className="ant-form-item-control-input-content"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
            >
              {arrType.map((item) => {
                return <Select.Option key={item.type}>{item.type}</Select.Option>;
              })}
            </Select>
          </Form.Item>
          <Form.Item name="num" label="Number">
            <InputNumber className="ant-input" />
          </Form.Item>
          <Form.Item name="price" label="Price">
            <Input />
          </Form.Item>
          <Form.Item name="des" label="Description">
            <Input.TextArea />
          </Form.Item>
          <div className="ant-row ant-form-item">
            <label className="ant-col ant-col-6 ant-form-item-label img-file">
              Image :
            </label>
            <input
              className="ant-col ant-col-12 ant-form-item-control"
              type="file"
              name="file"
              onChange={(e) => onChange(e)}
            />
          </div>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Update Product
            </Button>
          </Form.Item>
        </Form>
      </Modal>
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
      {/* Modal view */}
      <Modal
        title="Detail Product"
        visible={isModalVisible2}
        footer={null}
        onCancel={() => setIsModalVisible2(false)}
      >
        <form>
          <div name="detail-info" className="flex" >
            <img className="img-detail" src={isProdCur.url} alt={isProdCur.name} />
            <div className="info-detail">
              <div className="info-detail-item">
                <label className="label-detail">Name : </label>
                <label>{isProdCur.name}</label>
              </div>
              <div className="info-detail-item">
                <label className="label-detail">Price : </label>
                <label>{isProdCur.price}</label>
              </div>
              <div className="info-detail-item">
                <label className="label-detail">Type : </label>
                <label>{isProdCur.type}</label>
              </div>
              <div className="info-detail-item">
                <label className="label-detail">Num : </label>
                <label>{isProdCur.num}</label>
              </div>
              <div className="des-detail">
                <label className="label-detail">Descriptions : </label>
                <label>{isProdCur.des}</label>
              </div>
            </div>
          </div>

        </form>
      </Modal>
    </div>
  );
}
