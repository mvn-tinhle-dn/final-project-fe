import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import openNotificationWithIcon from "../../components/animations";
import FormProd from "../../components/modules/FromProd/index";

export default function EditProduct() {
  const { id } = useParams();
  let history = useHistory();
  const [products] = useState(JSON.parse(localStorage.getItem("products")));
  const currItem = products.find((item) => item.id.toString() === id);
  const arrEdit = products;
  //Update
  function onFinish(values, url) {
    if (values.name === "" || values.price === "" || values.num === null) {
      openNotificationWithIcon("warning", " Miss Prams");
    } else {
      const currentValue = arrEdit.find((item) => item.id === currItem.id);
      const indexValue = arrEdit.indexOf(currentValue);
      arrEdit[indexValue].name = values.name;
      arrEdit[indexValue].type = values.type;
      arrEdit[indexValue].price = values.price;
      arrEdit[indexValue].num = values.num;
      arrEdit[indexValue].des = values.des;
      url === ""
        ? (arrEdit[indexValue].url = currItem.url)
        : (arrEdit[indexValue].url = url);
      localStorage.setItem("products", JSON.stringify(arrEdit));
      openNotificationWithIcon("success", "Update Product");
      history.push("/products");
    }
  }

  return (
    <div className="edit">
      <h1 className="title-page">Edit</h1>
      <FormProd
        onFinish={onFinish}
        currItem={currItem}
        required={false}
        nameForm="Edit Product"
      />
    </div>
  );
}
