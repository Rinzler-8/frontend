import React from "react";
import "../../css/Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={require("../../Assets/img/logowithname.png")} alt="logo" />
      </div>
      <div className="footer-right">
        <div className="footer-information">
          <p className="shop-name">SHOP MỸ PHẨM GENUINE AND DIGNITY</p>
          <div className="footer-basic-info">
            <span>
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <span>Địa chỉ: 20 Phố Cửa Bắc, Trúc Bạch, Ba Đình, Hà Nội</span>
          </div>
          <div className="footer-basic-info">
            <span>
              <i className="fa-solid fa-phone-flip"></i>
            </span>
            <span>Hotline: 0919973623</span>
          </div>
          <div className="footer-basic-info">
            <span>
              <i className="fa-solid fa-envelope"></i>
            </span>
            <span>Email: gnd1818@gmail.com</span>
          </div>
        </div>
        <div className="footer-link">
          <span>THEO DÕI CHÚNG TÔI</span>
          <span>
            <a href="https://www.facebook.com/gnd1818" target="_blank" rel="noreferrer">
              <img src={require("../../Assets/icons/fb-icon.png")} alt="facebook icon" />
            </a>
          </span>
          <span>
            <a href="https://www.tiktok.com/@gnd1818" target="_blank" rel="noreferrer">
              <img src={require("../../Assets/icons/tiktok-icon.png")} alt="tiktok icon" />
            </a>
          </span>
          <span>
            <a href="https://shopee.vn/gnd1818" target="_blank" rel="noreferrer">
              <img src={require("../../Assets/icons/shopee-icon.png")} alt="shopee icon" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
