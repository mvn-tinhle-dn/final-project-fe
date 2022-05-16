import { Redirect, Route } from "react-router-dom";
import UserAuth from "../../../hooks/useAuth";

export default function PrivateRoute({ children, ...rest }) {
  let { isLogin } = UserAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
