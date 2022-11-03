import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import {  Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { signWithGoogle, signInEmailPassword } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const handleSubmitInfo = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    signInEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login succesFully");

        const currentUser = {
          email: user.email,
        };

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("genius-token", data.token);
            console.log(data);
          });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    signWithGoogle()
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("genius0-token", data.token);
          });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div>
      <div className="hero my-7">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2 md:pl-9">
            <img src={login} alt="" className="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <form onSubmit={handleSubmitInfo} className="card-body">
              <h1 className="text-center text-4xl text-orange-600 font-bold">
                LOGIN
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link className="label-text-alt text-blue-700 link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control my-2">
                <button type="submit" className="btn btn-secondary">
                  Login
                </button>
              </div>
              <div className="text-sm">
                If you dont have account ?{" "}
                <Link to={"/resister"} className="text-blue-700">
                  RESISTER
                </Link>{" "}
              </div>
              <p
                onClick={handleGoogleSignIn}
                className="text-sm  justify-center text-orange-600 flex items-center"
              >
                Sign In with Google{" "}
                <span>
                  <FaGoogle className="ml-3 " />
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
