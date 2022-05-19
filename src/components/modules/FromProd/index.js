import { Button, Form, Input, InputNumber, Select } from "antd";
import { useState } from "react";
import openNotificationWithIcon from "../../animations";

export default function FormProd({ onFinish, currItem, required, nameForm }) {
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const [url, setUrl] = useState(currItem ? currItem.url : "");
  const arrType = JSON.parse(localStorage.getItem("typeProds"));
  //get image
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

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={(value) => onFinish(value, url)}
      validateMessages={validateMessages}
      initialValues={currItem}
    >
      <h2 className="title-add">{nameForm}</h2>
      <Form.Item
        name={["name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["type"]}
        label="Type"
        rules={[{ required: true, message: "Province is required" }]}
      >
        <Select
          label="Name"
          className="ant-form-item-control-input-content"
          placeholder="Search to Select"
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
      <Form.Item
        name={["num"]}
        label="Num"
        className="ant-form-item-control-input-content"
        rules={[
          {
            type: "number",
            min: 0,
            max: 1000000000000,
            required: true,
          },
        ]}
      >
        <InputNumber className="ant-input" />
      </Form.Item>
      <Form.Item
        name={["price"]}
        label="Price"
        rules={[
          {
            type: "number",
            min: 0,
            max: 1000000000000,
            required: true,
          },
        ]}
      >
        <InputNumber className="ant-input" />
      </Form.Item>
      <Form.Item name={["des"]} label="Descriptions">
        <Input.TextArea />
      </Form.Item>
      <div className="ant-row ant-form-item">
        <label className="ant-col ant-col-8 ant-form-item-label img-file">
          Image :
        </label>
        <input
          className="ant-col ant-col-8 ant-form-item-control"
          type="file"
          name="file"
          onChange={(e) => onChange(e)}
          required={required}
        />
        {url === "" ? (
          <img
            className="img-add"
            src="https://img.sosanhgia.com/images/375x0/71374705fa7f499f881a929a262b680c/image/now-vn-ga-ngon-tram-mon-giam-toi-50.jpg"
            alt=""
          />
        ) : (
          <img className="img-add" src={url} alt="" />
        )}
      </div>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 15 }}>
        <Button type="primary" htmlType="submit">
          {nameForm}
        </Button>
      </Form.Item>
    </Form>
  );
}
