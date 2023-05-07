import React from "react";
import "./MenuBar.css";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";

const MenuBar = () => {
  return (
    <div className="menu-container">
      <div className="logo-area">
        <img src={require("../../../Assets/img/logowithbackground.png")} alt="logo" />
        <span>Genuine & Dignity</span>
      </div>
      <div className="menu-area">
        <div className="menu-item">
          <DashboardIcon />
          <span>Bảng điều khiển</span>
        </div>
        <div className="menu-item">
          <PersonIcon />
          <span>Quản lí tài khoản</span>
        </div>
        <div className="menu-item">
          <InventoryIcon />
          <span>Quản lí đơn hàng</span>
        </div>

        <div className="menu-item">
          <SettingsIcon />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;