import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { addToCart, addToFavorites, removeFromCart } from "../../store/actions";

const Product = () => {
  const dispatch = useDispatch();
  const url = useParams();
  const baseUrlProducts = process.env.REACT_APP_BASE_URL + "products/";
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let settings2 = {
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

  const [product, setProduct] = useState({});
  const [group, setGroup] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  // http://142.93.237.244:9090/v1/products-by-filter?url=kegel-top-5
  // http://142.93.237.244:9090/v1/groups/83481600-5758-4a27-bfc3-aad7aa7d2bfa
  useEffect(() => {
    axios
      .get(
        `http://142.93.237.244:9090/v1/products-by-filter?url=${url.product}`
      )
      .then((response) => setProduct(response.data.products[0]))
      .catch((error) => console.log(error));
  }, [url.product]);
  useEffect(() => {
    axios
      .get(`http://142.93.237.244:9090/v1/groups/${product.groupId}`)
      .then((response) => setGroup(response.data))
      .catch((error) => console.log(error));
  }, [product.groupId]);
  useEffect(() => {
    axios
      .get(
        `http://142.93.237.244:9090/v1/products-by-filter?groupUrl=${group.url}`
      )
      .then((response) => setRelatedProducts(response.data.products))
      .catch((error) => console.log(error));
  }, [group.url]);

  console.log("current group", group);
  return (
    <>
      {product && (
        <div className="container">
          <div className="section-divider"></div>
          <div className="row">
            <div className="col-6">
              <Slider {...settings} className="pr-main-slider">
                {product.images && product.images.length > 0 ? (
                  product.images.map((x) => {
                    return (
                      <div
                        className="img-fluid"
                        key={product.id + x.id + "product-page"}
                      >
                        <img src={baseUrlProducts + x.image} alt="" />
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <img
                      className="img-fluid"
                      src={require("../../assets/img/no-photo.jpeg")}
                      alt=""
                    />
                  </div>
                )}
              </Slider>
            </div>
            <div className="col-6">
              <div className="pr-status">In stock</div>
              <h1 className="page-title">{product.nameUz}</h1>
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
              <div className="pr-page-price">{product.price}sum</div>
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
                  placeholder="1"
                  required
                />
                <div className="qty-btns d-flex">
                  <button
                    className="btn minus"
                    onClick={() => dispatch(removeFromCart())}
                  >
                    -
                  </button>
                  <button
                    className="btn plus"
                    onClick={() => dispatch(addToCart())}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <button
                    className="btn dm-btn-black dm-text-13 w-100"
                    onClick={() => dispatch(addToCart())}
                  >
                    Add to cart
                  </button>
                </div>
                <div className="col-6">
                  <button
                    className="btn dm-btn-white dm-text-13 w-100"
                    onClick={() => dispatch(addToFavorites())}
                  >
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
            {relatedProducts.length > 0 &&
              relatedProducts &&
              relatedProducts.map((product) => {
                if (product.url == url.product) {
                  return null;  
                }
                return (
                  <div key={"product-page" + product.id}>
                    <div className="pr-card px-2">
                      <Link to={`/product/${product.url}`}>
                        <Slider {...settings3} className="pr-card-imgs">
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
          </Slider>
          <div className="section-divider"></div>
        </div>
      )}
    </>
  );
};

export default Product;
