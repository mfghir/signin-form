import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { validation } from "../data-validation/validation";
import "./Signup.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [touched, setTouched] = useState({});

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const touchedHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!Object.keys(error).length) {
      toast.success("فرم باموفقیت ارسال شد 👍");
    } else {
      toast.error("خطا در ارسال ❌");
      setTouched({ email: true, password: true });
    }

  };

  useEffect(() => {
    setError(validation(data, "login"));
  }, [data, touched]);

  return (
    <div className="main">
      <h2>فرم ثبت نام</h2>
      <form onSubmit={submitHandler}>
        <div>
          <input
            id="email"
            type="text"
            placeholder="ایمیل"
            name="email"
            onChange={changeHandler}
            value={data.email}
            onFocus={touchedHandler}
          />
          <label htmlFor="email">ایمیل</label>
          {error.email && touched.email && <span>{error.email}</span>}
        </div>

        <div>
          <input
            id="password"
            type="password"
            placeholder="رمز"
            name="password"
            onChange={changeHandler}
            value={data.password}
            onFocus={touchedHandler}
          />
          <label htmlFor="password">رمز</label>
          {error.password && touched.password && <span>{error.password}</span>}
        </div>

        <div className="btn">
          <Link to="/signup">ثبت نام</Link>
          <button type="submit">ورود</button>
        </div>
      </form>

      <ToastContainer rtl={true} />
      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </div>
  );
};

export default Login;
