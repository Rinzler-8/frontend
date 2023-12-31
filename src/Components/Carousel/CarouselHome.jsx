import React from "react";
import "./CarouselHome.css";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import carousel4 from "../../Assets/img/carousel4.png";
import carousel1 from "../../Assets/img/carousel1.png";
import bodyem from "../../Assets/img/bodyem.png";

const items = [
  {
    src: carousel4,
    altText: "Clinically Proven Cleansing for a Soothed Skin Barrier",
    caption: "TRỌN BỘ CHƯƠNG TRÌNH CHĂM SÓC DA",
    altCap: "ĐƯỢC CÔNG NHẬN BỞI CÔNG NGHỆ ĐỘC QUYỀN VÀ HIỆU QUẢ RÕ RỆT",
    key: 1,
  },
  {
    src: carousel1,
    altText: "Slide 2",
    caption: "SẴN SÀNG CHO LÀN DA MỚI",
    altCap: "ĐƯA LÀN DA QUAY LẠI TRẠNG THÁI CÂN BẰNG, KHỎE MẠNH NHẤT",
    key: 2,
  },
  {
    src: bodyem,
    altText: "Clinically Proven Cleansing for a Soothed Skin Barrier",
    caption: "BODY EMULSION",
    altCap: "GIÚP CẢI THIỆN KẾT CẤU DA, ĐỘ MỊN VÀ TỔNG THỂ CHO MỘT LÀN DA KHỎE MẠNH",
    key: 3,
  },
];

const Arrow = ({ onClick, direction }) => {
  return (
    <div className={`control-${direction}`} onClick={onClick}>
      {direction === "left" ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
    </div>
  );
};

function CarouselHome(props) {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4500,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  };
  return (
    <div>
      <Slider {...settings}>
        <div key={items[0].key} className="carousel">
          <img src={items[0].src} alt={items[0].altText} style={{ width: "100%", height: "700px" }} />
          <h1 className="carousel-text1">{items[0].caption}</h1>
          <p className="carousel-altCap1">{items[0].altCap}</p>
        </div>
        <div key={items[1].key} className="carousel">
          <img src={items[1].src} alt={items[1].altText} style={{ width: "100%", height: "700px" }} />
          <h1 className="carousel-text2">{items[1].caption}</h1>
          <p className="carousel-altCap2">{items[1].altCap}</p>
        </div>
        <div key={items[2].key} className="carousel">
          <img src={items[2].src} alt={items[2].altText} style={{ width: "100%", height: "700px" }} />
          <h1 className="carousel-text3">{items[2].caption}</h1>
          <p className="carousel-altCap3">{items[2].altCap}</p>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselHome;
