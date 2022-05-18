import { Button, Form, Input, InputNumber, Select } from "antd";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import openNotificationWithIcon from "../../components/animations";

export default function EditProduct() {
  const { id } = useParams();
  const [url, setUrl] = useState("");
  let history = useHistory()
  const [products] = useState(JSON.parse(localStorage.getItem("products")))
  const currItem = products.find((item) => item.id.toString() === id)
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 12,
    },
  };
  const arrEdit = products;
  const arrType = JSON.parse(localStorage.getItem("typeProds"));
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
  function onFinish(values) {
    if (values.name === "" || values.price === "") {
      openNotificationWithIcon("warning", " Miss Prams");
    } else {
      const currentValue = arrEdit.find((item) => item.id === currItem.id);
      const indexValue = arrEdit.indexOf(currentValue);
      arrEdit[indexValue].name = values.name;
      arrEdit[indexValue].type = values.type;
      arrEdit[indexValue].price = values.price;
      arrEdit[indexValue].num = values.num;
      arrEdit[indexValue].des = values.des;
      url === "" ? arrEdit[indexValue].url = currItem.url : arrEdit[indexValue].url = url;
      localStorage.setItem("products", JSON.stringify(arrEdit));
      openNotificationWithIcon("success", "Update Product");
      history.push("/products")
    }
  }
  return (
    <div className="edit">
      <h1 className="title-page">Edit</h1>
      <Form {...layout} initialValues={currItem} onFinish={onFinish}>
        <h2 className="title-add">Edit Product</h2>
        <Form.Item name="name" label="Name">
          <Input />
        </Form.Item>
        <Form.Item name="type" label="Type">
          <Select
            label="Type"
            showSearch
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
          <label className="ant-col ant-col-8 ant-form-item-label img-file">
            Image :
          </label>
          <input
            className="ant-col ant-col-12 ant-form-item-control"
            type="file"
            name="file"
            onChange={(e) => onChange(e)}
          />
        </div>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 15 }}>
          <Button type="primary" htmlType="submit">
            Update Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
