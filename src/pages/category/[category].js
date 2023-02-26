import React from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Form from "react-bootstrap/Form";

const Category = () => {
  const { id } = useParams();
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
  return (
    <div className="container">
      <div className="container">
        <h1 className="page-title">{id}</h1>
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
          <div className="category-pr-qty">Showing 8 products</div>
        </div>
        <div className="row">
          <div className="col-6 col-sm-6 col-md-4 col-lg-3">
            <div className="pr-card">
              <a href="#">
                <Slider {...settings}>
                  <div className="pr-img">
                    <img
                      src={require("../../assets/img/product0.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="pr-img">
                    <img
                      src={require("../../assets/img/product0.jpg")}
                      alt=""
                    />
                  </div>
                  <div className="pr-img">
                    <img
                      src={require("../../assets/img/product0.jpg")}
                      alt=""
                    />
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
    </div>
  );
};

export default Category;
