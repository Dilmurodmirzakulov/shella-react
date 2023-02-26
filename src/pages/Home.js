import React from "react";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export default function Home() {
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
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <CiSquareChevLeft className="modal-close-ic" />,
    // prevArrow: <CiSquareChevRight className="modal-close-ic" />,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="container-fluid p-0">
        <Carousel
          id="carouselExampleIndicators"
          className="carousel slide main-banner"
        >
          <Carousel.Item>
            <img
              src={require("../assets/img/slider-img1.webp")}
              className="d-block w-100"
              alt="..."
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../assets/img/slider-img2.webp")}
              className="d-block w-100"
              alt="..."
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../assets/img/slider-img3.webp")}
              className="d-block w-100"
              alt="..."
            />
          </Carousel.Item>
          {/* <div className="carousel-inner">
          </div> */}
        </Carousel>
      </div>

      <div className="section-divider"></div>

      <div className="container">
        <div className="dm-subtitle dm-mb-section-title text-center">
          Trending Now
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="cat-card position-relative overflow-hidden">
              <a href="#">
                <img
                  className="img-fluid"
                  src={require("../assets/img/personal-care.jpg")}
                  alt=""
                />
              </a>
              <div className="cat-card-title text-uppercase position-absolute dm-child-center">
                <div className="cat-cart-wrapper">
                  <p className="position-relative mb-0">makeup</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="cat-card position-relative overflow-hidden">
              <a href="#">
                <img
                  className="img-fluid"
                  src={require("../assets/img/personal-care.jpg")}
                  alt=""
                />
              </a>
              <div className="cat-card-title text-uppercase position-absolute dm-child-center">
                <div className="cat-cart-wrapper">
                  <p className="position-relative mb-0">makeup</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="cat-card position-relative overflow-hidden">
              <a href="#">
                <img
                  className="img-fluid"
                  src={require("../assets/img/personal-care.jpg")}
                  alt=""
                />
              </a>
              <div className="cat-card-title text-uppercase position-absolute dm-child-center">
                <div className="cat-cart-wrapper">
                  <p className="position-relative mb-0">makeup</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="cat-card position-relative overflow-hidden">
              <a href="#">
                <img
                  className="img-fluid"
                  src={require("../assets/img/personal-care.jpg")}
                  alt=""
                />
              </a>
              <div className="cat-card-title text-uppercase position-absolute dm-child-center">
                <div className="cat-cart-wrapper">
                  <p className="position-relative mb-0">makeup</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="cat-card position-relative overflow-hidden">
              <a href="#">
                <img
                  className="img-fluid"
                  src={require("../assets/img/personal-care.jpg")}
                  alt=""
                />
              </a>
              <div className="cat-card-title text-uppercase position-absolute dm-child-center">
                <div className="cat-cart-wrapper">
                  <p className="position-relative mb-0">makeup</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="cat-card position-relative overflow-hidden">
              <a href="#">
                <img
                  className="img-fluid"
                  src={require("../assets/img/personal-care.jpg")}
                  alt=""
                />
              </a>
              <div className="cat-card-title text-uppercase position-absolute dm-child-center">
                <div className="cat-cart-wrapper">
                  <p className="position-relative mb-0">makeup</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="cat-card position-relative overflow-hidden">
              <a href="#">
                <img
                  className="img-fluid"
                  src={require("../assets/img/personal-care.jpg")}
                  alt=""
                />
              </a>
              <div className="cat-card-title text-uppercase position-absolute dm-child-center">
                <div className="cat-cart-wrapper">
                  <p className="position-relative mb-0">makeup</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <div className="cat-card position-relative overflow-hidden">
              <a href="#">
                <img
                  className="img-fluid"
                  src={require("../assets/img/personal-care.jpg")}
                  alt=""
                />
              </a>
              <div className="cat-card-title text-uppercase position-absolute dm-child-center">
                <div className="cat-cart-wrapper">
                  <p className="position-relative mb-0">makeup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>

      <div className="container">
        <div className="dm-subtitle dm-mb-section-title text-center">
          Shop Bestsellers
        </div>
        <div className="row">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <div className="pr-card">
              <a href="#">
                <Slider {...settings} className="pr-card-imgs">
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
                <img
                  className="img-fluid"
                  src="/src/assets/img/heart.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
