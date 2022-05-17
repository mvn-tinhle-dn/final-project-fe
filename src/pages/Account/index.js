export default function Account() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="account">
      <h1 className="title-page">Account</h1>
      <div className='account-content flex'>
        <div className="account-img">
          <img src="https://ca.slack-edge.com/T7Z35JWLQ-U035U5L732B-3e102acf6cef-512" alt="" className="img-avatar" />
        </div>
        <div className="account-info">
          <h1>Hi {user.email} !</h1>
          <p> {user.email}</p>
        </div>
      </div>
    </div >
  )
}

