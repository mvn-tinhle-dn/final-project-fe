
export default function Account() {
  const use = JSON.parse(localStorage.getItem("useLogin"));
  const useLogin = use[0];
  return (
    <div className="account">
      <h1 className="title-page">Account</h1>
      <div className='account-content flex'>
        <div className="account-img">
          <img src={useLogin.avatar} alt="" className="img-avatar" />
        </div>
        <div className="account-info">
          <h1>Hi {useLogin.first_name} {useLogin.last_name} !</h1>
          <p>Email:  {useLogin.email}</p>
          <p>Admin</p>
        </div>
      </div>
    </div >
  )
}

