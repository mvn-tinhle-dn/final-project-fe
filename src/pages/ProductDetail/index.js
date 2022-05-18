import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [products] = useState(JSON.parse(localStorage.getItem("products")))
  const currItem = products.find((item) => item.id.toString() === id)
  return (
    <div className="product-detail">
      <h1 className="title-page">Products Detail</h1>
      <div name="detail-info" className="flex" >
        <img className="img-detail" src={currItem.url} alt={currItem.name} />
        <div className="info-detail">
          <div className="info-detail-item">
            <span className="item-name">{currItem.name}</span>
          </div>
          <div className="info-detail-item">
            <span className="item-price">{currItem.price} $</span>
          </div>
          <div className="info-detail-item">
            <h2 className="label-detail">Type : </h2>
            <span className="item-type">{currItem.type}</span>
          </div>
          <div className="info-detail-item">
            <h2 className="label-detail">Number : </h2>
            <span className="item-num">{currItem.num}</span>
          </div>
          <div className="des-detail">
            <h2 className="label-detail">Descriptions : </h2>
            <span className="item-des">{currItem.des}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
