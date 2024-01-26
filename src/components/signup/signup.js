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
export function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = async(e) =>{
    e.preventDefault();
    if(password === password2){

        try{const user = await AuthAPI.signup(email, password);
          await toast("success", "Sign up successful! You are now logged in.");
          navigate("/");
        dispatch(setUser(user));}
        catch(e){
          console.log("authication failed");
          toast("error", "Invalid Credentials!");
        }
    }else{
        toast("error", "password doesn't match");
        setPassword2("");
    }
  }
  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Signup <br />
        to access your team notes
      </h2>
      <form onSubmit={submit} className={s.formGroup}>
      <Input placeholder={"Email"} onTextChange={setEmail}/>
        <Input placeholder={"Password"} type="password" onTextChange={setPassword}/>
        <Input placeholder={"Confirm Password"} type="password" onTextChange={setPassword2}/>
        <ButtonPrimary className={s.button}>Sign Up!</ButtonPrimary>
        <span>
          Already have an account? <Link to={"/signin"}>Sign In</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}