import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";

const Product = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button className="btn next-arr slick-arrow" onClick={onClick}>
        <BsChevronRight className="slick-arr" />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="btn prev-arr slick-arrow" onClick={onClick}>
        <BsChevronLeft className="slick-arr" />
      </button>
    );
  }
  const settings3 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <CiSquareChevLeft className="modal-close-ic" />,
    // prevArrow: <CiSquareChevRight className="modal-close-ic" />,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="section-divider"></div>
      <div className="row">
        <div className="col-6">
          <Slider {...settings} className="pr-main-slider">
            <div>
              <img
                className="img-fluid"
                src={require("../assets/img/product1.webp")}
                alt=""
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src={require("../assets/img/product2.webp")}
                alt=""
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src={require("../assets/img/product3.webp")}
                alt=""
              />
            </div>
            <div>
              <img
                className="img-fluid"
                src={require("../assets/img/product4.webp")}
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div className="col-6">
          <div className="pr-status">In stock</div>
          <h1 className="page-title">Intense Eyeliner</h1>
          <div className="special-info-wrapper">
            <div className="pr-special-info">
              <span className="property">SKU: </span>
              <span className="value">c-11</span>
            </div>
            <div className="pr-special-info">
              <span className="property">VENDOR: </span>
              <span className="value">shella-cosmetics</span>
            </div>
          </div>
          <div className="pr-page-price">$195.2</div>
          <div className="dashed-line"></div>
          <div className="get-info-wrapper">
            <div className="pr-get-info">
              <span className="text">Delivery & return</span>
            </div>
            <div className="pr-get-info">
              <span className="text">message</span>
            </div>
          </div>
          <label className="text-uppercase dm-text-13">Quantity*</label>
          <div className="pr-page-qty">
            <input
              type="text"
              className="form-control dm-input"
              placeholder="Your Email Address"
              required
            />
            <div className="qty-btns d-flex">
              <button className="btn minus">-</button>
              <button className="btn plus">+</button>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <button className="btn dm-btn-black dm-text-13 w-100">
                Add to cart
              </button>
            </div>
            <div className="col-6">
              <button className="btn dm-btn-white dm-text-13 w-100">
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider"></div>

      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab
          eventKey="home"
          title="PRODUCT INFORMATION"
          tabClassName="rounded-0 dm-text-grey"
        >
          first tab
        </Tab>
        <Tab
          eventKey="profile"
          title="ADDITIONAL"
          tabClassName="rounded-0 dm-text-grey"
        >
          secon tab
        </Tab>
        <Tab
          eventKey="contact"
          title="CUSTOMER SERVICE"
          tabClassName="rounded-0 dm-text-grey"
        >
          third Tab
        </Tab>
      </Tabs>
      <div className="section-divider"></div>

      <Slider {...settings2}>
        <div className="pr-card">
          <a href="#">
            <Slider {...settings3} className="pr-card-imgs">
              <div className="pr-img">
                <img src={require("../assets/img/product0.jpg")} alt="" />
              </div>
              <div className="pr-img">
                <img src={require("../assets/img/product0.jpg")} alt="" />
              </div>
              <div className="pr-img">
                <img src={require("../assets/img/product0.jpg")} alt="" />
              </div>
            </Slider>
          </a>
          <a href="#">
            <p className="dm-text-hover-black d-inline-block dm-red-text dm-text-13 mb-0">
              Make Up
            </p>
          </a>
          <a href="#">
            <p className="dm-text-hover-grey dm-text-13 mb-0">
              Sexy Armor Concealer
            </p>
          </a>
          <p className="dm-text-17 dm-text-700 mb-0">$60.00</p>
          <button className="btn add-favorite dm-child-center">
            <img className="img-fluid" src="/src/assets/img/heart.svg" alt="" />
          </button>
        </div>
        <div className="pr-card">
          <a href="#">
            <Slider {...settings3} className="pr-card-imgs">
              <div className="pr-img">
                <img src={require("../assets/img/product0.jpg")} alt="" />
              </div>
              <div className="pr-img">
                <img src={require("../assets/img/product0.jpg")} alt="" />
              </div>
              <div className="pr-img">
                <img src={require("../assets/img/product0.jpg")} alt="" />
              </div>
            </Slider>
          </a>
          <a href="#">
            <p className="dm-text-hover-black d-inline-block dm-red-text dm-text-13 mb-0">
              Make Up
            </p>
          </a>
          <a href="#">
            <p className="dm-text-hover-grey dm-text-13 mb-0">
              Sexy Armor Concealer
            </p>
          </a>
          <p className="dm-text-17 dm-text-700 mb-0">$60.00</p>
          <button className="btn add-favorite dm-child-center">
            <img className="img-fluid" src="/src/assets/img/heart.svg" alt="" />
          </button>
        </div>
        <div className="pr-card">
          <a href="#">
            <Slider {...settings3} className="pr-card-imgs">
              <div className="pr-img">
                <img src={require("../assets/img/product0.jpg")} alt="" />
              </div>
              <div className="pr-img">
                <img src={require("../assets/img/product0.jpg")} alt="" />
              </div>
              <div className="pr-img">
                <img src={require("../assets/img/product0.jpg")} alt="" />
              </div>
            </Slider>
          </a>
          <a href="#">
            <p className="dm-text-hover-black d-inline-block dm-red-text dm-text-13 mb-0">
              Make Up
            </p>
          </a>
          <a href="#">
            <p className="dm-text-hover-grey dm-text-13 mb-0">
              Sexy Armor Concealer
            </p>
          </a>
          <p className="dm-text-17 dm-text-700 mb-0">$60.00</p>
          <button className="btn add-favorite dm-child-center">
            <img className="img-fluid" src="/src/assets/img/heart.svg" alt="" />
          </button>
        </div>
        <div className="pr-card">
          <a href="#">
            <Slider {...settings3} className="pr-card-imgs">
              <div className="pr-img">
                <img src={require("../assets/img/product0.jpg")} alt="" />
              </div>
              <div className="pr-img">
                <img src={require("../assets/img/product0.jpg")} alt="" />
              </div>
              <div className="pr-img">
                <img src={require("../assets/img/product0.jpg")} alt="" />
              </div>
            </Slider>
          </a>
          <a href="#">
            <p className="dm-text-hover-black d-inline-block dm-red-text dm-text-13 mb-0">
              Make Up
            </p>
          </a>
          <a href="#">
            <p className="dm-text-hover-grey dm-text-13 mb-0">
              Sexy Armor Concealer
            </p>
          </a>
          <p className="dm-text-17 dm-text-700 mb-0">$60.00</p>
          <button className="btn add-favorite dm-child-center">
            <img className="img-fluid" src="/src/assets/img/heart.svg" alt="" />
          </button>
        </div>
        <div className="pr-card">
          <a href="#">
            <Slider {...settings3} className="pr-card-imgs">
              <div className="pr-img">
                <img src={require("../assets/img/product0.jpg")} alt="" />
              </div>
              <div className="pr-img">
                <img src={require("../assets/img/product0.jpg")} alt="" />
              </div>
              <div className="pr-img">
                <img src={require("../assets/img/product0.jpg")} alt="" />
              </div>
            </Slider>
          </a>
          <a href="#">
            <p className="dm-text-hover-black d-inline-block dm-red-text dm-text-13 mb-0">
              Make Up
            </p>
          </a>
          <a href="#">
            <p className="dm-text-hover-grey dm-text-13 mb-0">
              Sexy Armor Concealer
            </p>
          </a>
          <p className="dm-text-17 dm-text-700 mb-0">$60.00</p>
          <button className="btn add-favorite dm-child-center">
            <img className="img-fluid" src="/src/assets/img/heart.svg" alt="" />
          </button>
        </div>
      </Slider>
      <div className="section-divider"></div>
    </div>
  );
};

export default Product;
