import { useSelector } from "react-redux";
export default function Account() {
  const userLogin = useSelector((state) => state.userLogin.value);
  return (
    <div className="account">
      <h1 className="title-page">Account</h1>
      <div className="account-content flex">
        <div className="account-img">
          <img src={userLogin.avatar} alt="" className="img-avatar" />
        </div>
        <div className="account-info">
          <h1>
            Hi {userLogin.first_name} {userLogin.last_name} !
          </h1>
          <p>Email: {userLogin.email}</p>
          <p>Admin</p>
        </div>
      </div>
    </div>
  );
}
