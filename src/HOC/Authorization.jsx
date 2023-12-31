// import React, { useRef } from "react";
// import { Outlet, Navigate } from "react-router-dom";
// import Header from "../Components/Header/Header";
// import Footer from "../Components/Footer/Footer";
// import AppContext from "../AppContext";
// import storage from "../Storage/Storage";
// import { useDispatch, useSelector } from "react-redux";

// const role = storage.getItem("role");
// const status = storage.getItem("status");
// const token = storage.getItem("token");

// const parseJwt = (token) => {
//   try {
//     const base64Url = token.split(".")[1];
//     const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//     const decodedPayload = decodeURIComponent(
//       atob(base64)
//         .split("")
//         .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
//         .join("")
//     );
//     return JSON.parse(decodedPayload);
//   } catch (e) {
//     return null;
//   }
// };

// const decodedJwt = parseJwt(token);
// if (decodedJwt && decodedJwt.exp * 1000 < Date.now()) {
//   // console.log("decodedJwt", decodedJwt);
//   // storage.clear();
//   // window.location.reload();
//   <Navigate to="/" />;
// }

// function AdminAuth() {
//   const dispatchRedux = useDispatch();
//   return role === "ADMIN" && token && status === "ACTIVE" ? (
//     <AppContext.Provider
//       value={{
//         dispatchRedux,
//       }}
//     >
//       <Outlet />
//     </AppContext.Provider>
//   ) : (
//     <Navigate to="/" />
//   );
// }
// function WithAuth() {
//   const dispatchRedux = useDispatch();

//   return token && status === "ACTIVE" ? (
//     <AppContext.Provider
//       value={{
//         dispatchRedux,
//       }}
//     >
//       <Outlet />
//     </AppContext.Provider>
//   ) : (
//     <Navigate to="/login" />
//   );
// }

// function WithNav() {
//   const introRef = useRef(null);
//   let accountDefaultImg = require(`../Assets/img/account-default-img.png`);
//   const logoBackground = require(`../Assets/img/logowithbackground.png`);
//   const dispatchRedux = useDispatch();
//   const cartStateRedux = useSelector((state) => state);
//   const drawerIsOpen = cartStateRedux.CartDrawerReducer.isOpen;
//   const scrollToComponent = () => {
//     if (introRef.current) {
//       introRef.current.scrollIntoView({
//         behavior: "smooth", // Optionally, add smooth scrolling effect
//         block: "start", // Scroll to the top of the component
//       });
//     }
//   };
//   return role !== "ADMIN" ? (
//     <AppContext.Provider
//       value={{
//         introRef,
//         scrollToComponent,
//         drawerIsOpen,
//         logoBackground,
//         accountDefaultImg,
//         dispatchRedux,
//       }}
//     >
//       <Header />
//       <Outlet />
//       <Footer />
//     </AppContext.Provider>
//   ) : (
//     <Navigate to="/admin" />
//   );
// }

// export { AdminAuth, WithAuth, WithNav };
