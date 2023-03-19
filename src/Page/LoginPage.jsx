import React, { useEffect } from "react";
import LoginComponent from "../Components/Login/LoginComponent";
import { checkLoginAPI } from "../API/LoginAPI";
import storage from "../Storage/Storage";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { Grid, Box, Typography, Rating, Item, Paper, TextField } from "@mui/material";
import Register from "../Components/Register/RegisterComponent";
import "./../../src/css/LoginPage.css";
import "./../../src/css/toastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage(props) {
  let navigate = useNavigate();

  let handleLogin = (accountLogin) => {
    // console.log("Value: ", accountLogin);
    // Call API
    checkLoginAPI(accountLogin)
      .then((response) => {
        if (response !== null && response !== undefined) {
          console.log("response: ", response);
          let accountLoginSaveToStorage = {
            id: response.id,
            username: response.username,
            email: response.email,
            role: response.roles,
            status: response.status,
          };
          // Lưu thông tin Account vào LocalStorage để sử dụng về sau
          storage.setUserInfo(accountLoginSaveToStorage);
          storage.setToken(accountLoginSaveToStorage);
          console.log("ROLE: ", localStorage.getItem("role"));
          toast.success("Login thành công.", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          window.location.reload();
          setTimeout(() => navigate("/"), 1000);
        } else {
          toast.error("Thông tin đăng nhập sai! Vui lòng thử lại.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => {
        toast.error("Đã có lỗi xảy ra.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <Grid container style={{ marginTop: "90px" }}>
      {/* SHIPPING INFORMATION */}
      <Grid item md={6}>
        <LoginComponent handleLogin={handleLogin} />
        <ToastContainer />;
      </Grid>
      <div className="vl"></div>
      {/* ORDER SUMMARY */}
      <Grid item md={5.9}>
        <Register />
      </Grid>
    </Grid>
  );
}

export default LoginPage;