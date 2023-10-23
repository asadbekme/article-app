import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { icon } from "../constants";
import AuthService from "../service/auth";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import { Input } from "../ui";
import ValidationError from "./ValidationError";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    dispatch(signUserStart());
    const user = { email: email, password: password };
    try {
      const response = await AuthService.userLogin(user);
      dispatch(signUserSuccess(response.user));
      navigate("/");
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img
            src={icon}
            alt="icon image"
            style={{ width: "75px", height: "74px" }}
          />
          <h1 className="h3 my-3 fw-normal">Login</h1>
          <ValidationError />

          <Input
            type={"email"}
            label={"Email"}
            state={email}
            setState={setEmail}
          />

          <Input
            type={"password"}
            label={"Password"}
            state={password}
            setState={setPassword}
          />

          <button
            className="w-100 btn btn-lg btn-primary mt-2"
            type="submit"
            disabled={isLoading}
            onClick={loginHandler}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
