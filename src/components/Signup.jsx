import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { validation } from "../data-validation/validation";
import "./Signup.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [error, setError] = useState({});
  const [touched, setTouched] = useState({});

  const changeHandler = (e) => {
    if (e.target.name === "isAccepted") {
      setData({ ...data, [e.target.name]: e.target.checked });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const touchedHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(error).length) {
      // alert("send");
      toast.success('فرم باموفقیت ارسال شد 👍')
    } else {
      // alert("error");
      toast.error('خطا در ارسال ❌')

      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  useEffect(() => {
    setError(validation(data, "signup"));
  }, [data, touched]);

  return (
    <div className="main">
      <h2>فرم ثبت نام</h2>
      <form onSubmit={submitHandler}>
        <div>
          <input
            id="name"
            type="text"
            placeholder="نام"
            name="name"
            onChange={changeHandler}
            value={data.name}
            className={error.name && "error"}
            onFocus={touchedHandler}
          />
          <label htmlFor="name">نام</label>
          {error.name && touched.name && <span>{error.name}</span>}
        </div>

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

        <div>
          <input
            id="confirmPassword"
            type="password"
            placeholder="تکرار رمز"
            name="confirmPassword"
            onChange={changeHandler}
            value={data.confirmPassword}
            onFocus={touchedHandler}
          />
          <label htmlFor="confirmPassword">تکرار رمز</label>
          {error.confirmPassword && touched.confirmPassword && (
            <span>{error.confirmPassword}</span>
          )}
        </div>

        <div className='checkbox'>
          <input
            id="isAccepted"
            type="checkbox"
            name="isAccepted"
            onChange={changeHandler}
            value={data.isAccepted}
            onFocus={touchedHandler}
          />
          <label htmlFor="isAccepted">قوانین و مقررات سایت را می پذیرم</label>
          {error.isAccepted && touched.isAccepted && (
            <span>{error.isAccepted}</span>
          )}
        </div>

        <div className='btn'>
          <Link to="/login">ورود</Link>
          <button type="submit">ثبت نام</button>
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

export default Signup;
