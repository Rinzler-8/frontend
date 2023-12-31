import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";
import { actionFetchProductAPI } from "../../Redux/Action/ProductAction";
import {
  actionAddToCartAPI,
  actionUpdateCartQty,
  actionGetCartByUserIdAPI,
  actionOpenCart,
  actionUpdateCartAPI,
} from "../../Redux/Action/CartAction";
import Slider from "react-slick";
import "./ProductList.scss";
import "./slickProduct.scss";
import "../Carousel/slick-theme.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../../src/css/toastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import storage from "../../Storage/Storage";
import { useContext } from "react";
import AppContext from "../../AppContext";

let slidesToShow = 3;

const PreviousBtn = (props) => {
  const { onClick, currentSlide } = props;
  return (
    <>
      {currentSlide === 0 ? (
        <div className={`controlProd-left`}>
          <ArrowBackIosNewIcon style={{ color: "grey", fontSize: "30px" }} />
        </div>
      ) : (
        <div className={`controlProd-left`} onClick={onClick}>
          <ArrowBackIosNewIcon style={{ color: "0a0f9e", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { onClick, slideCount, currentSlide } = props;
  return (
    <>
      {(currentSlide !== slideCount - slidesToShow) == 0 ? (
        <div className={`controlProd-right`}>
          <ArrowForwardIosIcon style={{ color: "grey", fontSize: "30px" }} />
        </div>
      ) : (
        <div className={`controlProd-right`} onClick={onClick}>
          <ArrowForwardIosIcon style={{ color: "0a0f9e", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};

const ProductList = () => {
  const { dispatchRedux } = useContext(AppContext);
  const stateRedux = useSelector((state) => state);
  const cartStateRedux = useSelector((state) => state.cartReducer);
  const cart = stateRedux.cartReducer;
  const listProduct = stateRedux.listProductReducer;
  let id = storage.getItem("id");

  const handleAddToCart = (id, cartItem) => {
    const prod = listProduct.find(
      (item) => item.productId === cartItem.productId
    );
    if (prod.stockQty <= 0) {
      toast.error("Sản phẩm đã hết hàng !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const existingItem = cart.cartItems.find(
        (item) => item.productId === cartItem.productId
      );
      if (existingItem) {
        existingItem.quantity += 1;
        dispatchRedux(actionUpdateCartAPI(id, existingItem));
        dispatchRedux(actionGetCartByUserIdAPI(id));
      } else {
        const newCartItem = {
          user_id: id,
          quantity: 1,
          price: cartItem.price,
          productId: cartItem.productId,
        };

        dispatchRedux(actionAddToCartAPI(newCartItem));
        dispatchRedux(actionUpdateCartQty(1));
      }
      dispatchRedux(actionOpenCart());
    }
  };

  useEffect(() => {
    dispatchRedux(actionFetchProductAPI());
    dispatchRedux(actionGetCartByUserIdAPI(id));
  }, [cartStateRedux.quantity, cart.cartItems.length]);

  const settings = {
    // centerMode: true;
    dots: false,
    touchMove: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 412,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="product-list-title">SẢN PHẨM BÁN CHẠY</div>
      <div className="list-item-container">
        <Slider {...settings}>
          {listProduct.map((product, index) => (
            <div className="productItem-container" key={index}>
              <NavLink
                to={`/products/${product.productId}`}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textDecoration: "none",
                  paddingLeft: "17px",
                  padding: "0",
                  width: "400px",
                }}
              >
                <img
                  alt="Sample"
                  className="productItem-img"
                  src={
                    "http://localhost:8080/api/v1/fileUpload/files/" +
                    product.imageName
                  }
                />
              </NavLink>
              <div className="productItem-information">
                <h5
                  style={{
                    color: "black",
                    fontFamily: "Lucida Sans, sans-serif",
                    height: "50px",
                  }}
                >
                  {product.name}
                </h5>
                <p
                  className="mb-2 text-muted"
                  tag="h6"
                  style={{ height: "50px" }}
                >
                  {product.info}
                </p>
                <p
                  style={{
                    color: "black",
                    fontFamily: "Univers LT Std, sans-serif",
                  }}
                >
                  {product.price.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <p
                  style={{
                    color: "black",
                    fontFamily: "Univers LT Std, sans-serif",
                  }}
                >
                  (Giá tham khảo)
                </p>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(id, product)}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          ))}
        </Slider>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProductList;
