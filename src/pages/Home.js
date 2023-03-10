import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import axios from "axios";
import { Link } from "react-router-dom";

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

  const [products, setProducts] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get("http://142.93.237.244:9090/v1/products-by-filter?enabled=true")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://142.93.237.244:9090/v1/groups-by-filter?enabled=true")
      .then((response) => setGroups(response.data))
      .catch((error) => console.log(error));
  }, []);

  // console.log("base-url", process.env.REACT_APP_BASE_URL);

  console.log("groups", products);
  const baseUrlGroups = process.env.REACT_APP_BASE_URL + "groups/";
  const baseUrlProducts = process.env.REACT_APP_BASE_URL + "products/";
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
          {groups &&
            groups.map((group) => {
              return (
                <div
                  className="col-12 col-md-6 col-lg-3 mb-4"
                  key={"card-category" + group.id}
                >
                  <div className="cat-card position-relative overflow-hidden">
                    <Link to={`/category/${group.url}`}>
                      {group.image ? (
                        <img
                          className="img-fluid"
                          src={baseUrlGroups + group.image}
                          alt=""
                        />
                      ) : (
                        <img
                          className="img-fluid"
                          src={require("../assets/img/no-photo.jpeg")}
                          alt=""
                        />
                      )}
                    </Link>
                    <div className="cat-card-title text-uppercase position-absolute dm-child-center">
                      <div className="cat-cart-wrapper">
                        <p className="position-relative mb-0">{group.nameUz}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="section-divider"></div>

      <div className="container">
        <div className="dm-subtitle dm-mb-section-title text-center">
          Shop Bestsellers
        </div>
        <div className="row">
          {products.products &&
            products.products.map((product) => {
              return (
                <div
                  className="col-6 col-sm-6 col-md-4 col-lg-3"
                  key={"product-index-page" + product.id}
                >
                  <div className="pr-card">
                    <Link to={`/product/${product.url}`}>
                      <Slider {...settings} className="pr-card-imgs">
                        {product.images.length > 0 ? (
                          product.images.map((x) => {
                            return (
                              <div
                                className="pr-img"
                                key={product.id + x.id + "index-page"}
                              >
                                <img src={baseUrlProducts + x.image} alt="" />
                              </div>
                            );
                          })
                        ) : (
                          <div
                            className="pr-img"
                            key={product.id + "no-photo-index-page"}
                          >
                            <img
                              src={require("../assets/img/no-photo.jpeg")}
                              alt=""
                            />
                          </div>
                        )}
                        {/* <div className="pr-img">
                          <img
                            src={require("../assets/img/product0.jpg")}
                            alt=""
                          />
                        </div>
                        <div className="pr-img">
                          <img
                            src={require("../assets/img/product0.jpg")}
                            alt=""
                          />
                        </div> */}
                      </Slider>
                    </Link>
                    <a href="#">
                      <p className="dm-text-hover-black d-inline-block dm-red-text dm-text-13 mb-0">
                        Make Up
                      </p>
                    </a>
                    <a href="#">
                      <p className="dm-text-hover-grey dm-text-13 mb-0">
                        {product.nameUz}
                      </p>
                    </a>
                    <p className="dm-text-17 dm-text-700 mb-0">
                      {product.price} sum
                    </p>
                    <button className="btn add-favorite dm-child-center">
                      <img
                        className="img-fluid"
                        src="/src/assets/img/heart.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="section-divider"></div>
      </div>
    </>
  );
}
