import { useState } from "react";
import { ButtonPrimary } from "../components/ButtonPrimary/ButtonPrimary";
import { Input } from "../components/Input/Input";
import { Navigate, redirect } from "react-router-dom";

export const Auth = () => {
  const [LoginValue, setLoginValue] = useState("");
  const [PasswordValue, setPasswordValue] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  if (isLogin) return <Navigate to="/" replace={true} />;
  return (
    <div className="Auth">
      <div className="form">
        <Input
          placeholder="Login"
          title="Login"
          onChange={(v: any) => setLoginValue(v.target.value)}
        />
        <Input
          placeholder="********"
          title="Password"
          type="password"
          onChange={(v: any) => setPasswordValue(v.target.value)}
        />
        <ButtonPrimary onClick={Login}>Login</ButtonPrimary>
      </div>
    </div>
  );

  function Login() {
    console.log(LoginValue, ":", PasswordValue);

    setIsLogin(true);
  }
};
