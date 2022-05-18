import { useState } from "react";
import { useHistory } from "react-router-dom";

const UserAuth = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [isLogin, setIsLogin] = useState(!!user);
  const history = useHistory();

  const login = (email, password) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify({ email }));
        setUser({ email });
        setIsLogin(true);
        history.replace('/');
        res({ email });
      }, 1000);
    });
  }
  const logout = () => {
    localStorage.removeItem('user');
    setIsLogin(false);
    history.replace('/auth/login');
  }

  return { isLogin, login, logout }

}

export default UserAuth;
