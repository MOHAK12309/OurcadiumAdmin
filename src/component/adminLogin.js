import React from "react";
import axios from "axios";
import { useState } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { getUserIdFromAuth } from '../Redux/actions/GetSellerIdFromAuthActionCreators';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function AdminLogin() {
  const baseUrl = "https://server.youthbuzz.in";
  const baseUrls = "http://localhost:8000";
  const dispatch=useDispatch('')
  const navigate=useNavigate("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm] = useState("");
  const [token, setToken] = useState("");
  const id = useSelector((state) => state.get_seller_profile_id.user_id);
  console.log(id)
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/api/v1/admin/login`, {
        // lastname:lastname,
        email: email,
        password: password,

        headers: {
          Authorization: `Bearer ${token}`,
        },

        // isEmailVerified: isEmailVerified
      });
      console.log(response);
      if (response.data.statusbar === "success") {
      dispatch(getUserIdFromAuth(response.data.data.admin._id,response.data.data.admin.email))
      alert("HELLO ADMIN")
      navigate('/')

      }
      // if (response.data.statusbar === "success") {
      //   dispatch(getUserIdFromAuth(response.data.data.user._id, response.data.data.user.lastname, response.data.data.user.name, response.data.data.user.email));
      //   navigate("/home")
      // }
    } catch (error) {
      console.log(error);
      // if (error.message === "Request failed with status code 403") {
      //   setsign("OTP")

      // }
    }
  };
  return (
    <>
      <div className="login">
        <h4>Admin Login</h4>
        <form onSubmit={handleLogin}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email"
            type="text"
            className="login-form"
          ></input>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="password"
            type="password"
            className="login-form"
          ></input>
          <button type="submit" className="login-btn">
            LOGIN{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
