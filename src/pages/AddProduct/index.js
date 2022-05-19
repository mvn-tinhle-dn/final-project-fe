import React from "react";
import openNotificationWithIcon from "../../components/animations";
import FormProd from "../../components/modules/FromProd";

export default function AddProduct() {
  const arrPros = JSON.parse(localStorage.getItem("products"));
  //add
  const onFinish = (values, url) => {
    const id = Math.floor(Math.random() * 1000);
    arrPros.unshift({ ...values, id, url });
    localStorage.setItem("products", JSON.stringify(arrPros));
    openNotificationWithIcon("success", "Add Product");
  };

  return (
    <div className="add-product">
      <h1 className="title-page">Add Product</h1>
      <FormProd onFinish={onFinish} required={true} nameForm="Add Product" />
    </div>
  );
}
