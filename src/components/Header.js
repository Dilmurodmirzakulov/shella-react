import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  showCart,
  showFavorites,
  showProfile,
  showSearch,
  showService,
} from "../store/actions";
import {
  CiSearch,
  CiCircleQuestion,
  CiUser,
  CiHeart,
  CiShoppingCart,
} from "react-icons/ci";

function Header() {
  const dispatch = useDispatch();
  return (
    <div>
      <header>
        <nav className="py-2">
          <div className="container">
            <div className="position-relative main-nav dm-child-center">
              <button className="btn d-flex d-md-none mr-3">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
              <div className="main-logo mx-lg-auto">
                <Link to="/">
                  <img
                    className="img-fluid"
                    alt="Make Up"
                    src="../assets/img/service-ic.svg"
                  />
                </Link>
              </div>
              <ul className="nav dm-nav-links">
                <li className="nav-item">
                  <button
                    className="nav-link btn"
                    onClick={() => dispatch(showSearch())}
                  >
                    <CiSearch />
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn nav-link"
                    onClick={() => dispatch(showService())}
                  >
                    <CiCircleQuestion />
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn"
                    onClick={() => dispatch(showProfile())}
                  >
                    {/* <img
                      className="img-fluid nav-img"
                      src="./src/assets/img/profile-ic.svg"
                      alt="profile"
                    /> */}
                    <CiUser />
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn nav-link"
                    onClick={() => dispatch(showFavorites())}
                  >
                    {/* <img
                      className="img-fluid nav-img"
                      src="../assets/img/heart.svg"
                      alt="favorites"
                    /> */}
                    <CiHeart />
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn nav-link"
                    onClick={() => dispatch(showCart())}
                  >
                    {/* <img
                      className="img-fluid nav-img"
                      src="./src/assets/img/shopping-bag-ic.svg"
                      alt="cart"
                    /> */}
                    <CiShoppingCart />
                    <span className="align-bottom dm-text-13 text-black">
                      Bag (15)
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="bg-gray cat-wrapper">
          <div className="container">
            <div className="cat-list d-flex">
              <div className="category-item category-has-children dm-child-center">
                <Link
                  to={`/posts/example`}
                  className="category-item category-has-children dm-child-center"
                >
                  <span className="text-uppercase">Makeup</span>
                </Link>
              </div>
              <div className="category-item dm-child-center">
                <a href="#" className="px-3 d-flex align-items-center">
                  <span className="text-uppercase">Skin Care</span>
                </a>
              </div>
              <div className="category-item dm-child-center">
                <a href="#" className="px-3 d-flex align-items-center">
                  <span className="text-uppercase">Hair Care</span>
                </a>
              </div>
              <div className="category-item dm-child-center">
                <a href="#" className="px-3 d-flex align-items-center">
                  <span className="text-uppercase">Makeup</span>
                </a>
              </div>
              <div className="category-item dm-child-center">
                <a href="#" className="px-3 d-flex align-items-center">
                  <span className="text-uppercase">Makeup</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
