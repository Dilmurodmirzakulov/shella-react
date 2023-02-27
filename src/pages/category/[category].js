import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import Form from "react-bootstrap/Form";
import axios from "axios";

const Category = () => {
  const baseUrlProducts = process.env.REACT_APP_BASE_URL + "products/";
  const [products, setProducts] = useState([]);
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    // nextArrow:
    //   '<img className="next-arr" src="/assets/img/right-slider-arrow.svg" alt="">',
    // prevArrow:
    //   '<img className="prev-arr" src="/assets/img/left-slider-arrow.svg" alt="">',
  };
  const url = useParams();
  // http://142.93.237.244:9090/v1/products-by-filter?groupUrl=kosmetikalar&enabled=true

  useEffect(() => {
    axios
      .get(
        `http://142.93.237.244:9090/v1/products-by-filter?groupUrl=${url.category}&enabled=true`
      )
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.log(error));
  }, [url.category]);

  console.log("products", products);
  return (
    <div className="container">
      <div className="container">
        <h1 className="page-title">{url.category}</h1>
        <div className="position-relative">
          <div className="d-flex align-items-center">
            <div className="dm-text-13 me-2">Sort:</div>
            <Form.Select
              size="sm"
              className="select-filter"
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div className="category-pr-qty">
            Showing {products.length} products
          </div>
        </div>
        <div className="section-divider"></div>
        <div className="row">
          {products &&
            products.map((product) => {
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
                              src={require("../../assets/img/no-photo.jpeg")}
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
    </div>
  );
};

export default Category;
