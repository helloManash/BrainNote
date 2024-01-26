import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "components/Input/input";
import s from "./style.module.css";
import { AuthLayout } from "components/layout/authLayout/authLayout";
import { useState } from "react";
import { AuthAPI } from "api/auth";
import { useDispatch } from "react-redux";
import { setUser } from "store/auth/auth-slice";
import { toast } from "utils/sweet-alert";
export function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = async(e) =>{
    e.preventDefault();
    try{const user = await AuthAPI.signin(email, password);
      await toast("success", "Login successful!");
      navigate("/");
    dispatch(setUser(user));}
    catch(e){
      console.log("authication failed");
      toast("error", "Invalid Credentials!");
    }
  }
  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Signin <br />
        to access your team notes
      </h2>
      <form onSubmit={submit} className={s.formGroup}>
      <Input placeholder={"Email"} onTextChange={setEmail}/>
        <Input placeholder={"Password"} type="password" onTextChange={setPassword}/>
        <ButtonPrimary className={s.button}>Sign in!</ButtonPrimary>
        <span>
          Don't have an account yet ? <Link to={"/signup"}>Sign up</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}