import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Resister = () => {
  const { createUserEmailPassword, updateUserProfile } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const handleSubmitInfo = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = event.target.name.value;

    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Created user succesfully !!");
        navigate(from, { replace: true });
        updateUserProfile(name)
          .then(() => {
            form.reset();
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.warn(errorMessage);
          });
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
                RESISTER
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <label className="label ">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control my-2">
                <button type="submit" className="btn btn-secondary">
                  Login
                </button>
              </div>
              <div className="text-sm ">
                If you have alreadey an account ?{" "}
                <Link to={"/login"} className="text-blue-700">
                  LOGIN
                </Link>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resister;
