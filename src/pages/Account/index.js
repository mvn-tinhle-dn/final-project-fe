import { useEffect, useState } from "react";
import { apiAuthGetMe } from "../../api/auth/auth.api";
export default function Account() {
  const userDefault = {
    email: "tinhle@gmail.com",
    first_name: "tinh",
    last_name: "le",
    avatar: 'https://reqres.in/img/faces/2-image.jpg'
  }
  const [data, setData] = useState(userDefault);
  useEffect(() => {
    apiAuthGetMe()
      .then((response) => response.data)
      .then((result) => setData({ ...result.data }))
  }, []);
  return (
    <div className="account">
      <h1 className="title-page">Account</h1>
      <div className='account-content flex'>
        <div className="account-img">
          <img src={data.avatar} alt="" className="img-avatar" />
        </div>
        <div className="account-info">
          <h1>Hi {data.first_name} {data.last_name} !</h1>
          <p>Email:  {data.email}</p>
          <p>Admin</p>
        </div>
      </div>
    </div >
  )
}

