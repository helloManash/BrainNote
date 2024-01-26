import { Logo } from "components/logo";
import s from "./style.module.css";
import logoSrc from "assets/images/logo.png";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthAPI } from "api/auth";
import { setUser } from "store/auth/auth-slice";



export function Header(props) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.authSlice.auth.user);
  const signout = () =>{
    AuthAPI.signout();
    dispatch(setUser(null));
  }
  const renderAuthProile = () =>{
    return <div>
      <img src={`https://api.dicebear.com/5.x/bottts/svg?seed=${user.email}`} style={{width: 40}} className="rounded-circle"/>
      <div>Hello, {user.email}</div>
      <Link to='#' onClick={signout}>Sign out</Link>
    </div>
  }
  const navigate = useNavigate();
  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => navigate("/")}
          title="BrainNote"
          subtitle={"Manage your notes"}
          image={logoSrc}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">
        {renderAuthProile()}
      </div>
    </div>
  );
}