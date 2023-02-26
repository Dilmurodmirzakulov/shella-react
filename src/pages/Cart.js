import React from "react";

function Cart() {
  return (
    <>
      <div className="container">
        <h1 className="page-title text-center">Shopping Bag</h1>
        <div className="row">
          <div className="col-9">
            <div className="cart-row dm-border-b-grey pb-2">
              <div className="dm-text-13 dm-text-grey text-uppercase">
                PRODUCT
              </div>
              <div className="dm-text-13 dm-text-grey text-uppercase">
                PRICE
              </div>
              <div className="dm-text-13 dm-text-grey text-uppercase">
                QUANTITY
              </div>
              <div className="dm-text-13 dm-text-grey text-uppercase text-end">
                TOTAL
              </div>
            </div>
            <div className="cart-row dm-border-b-grey">
              <div className="d-flex align-items-center">
                <button className="btn">
                  <img
                    src="/assets/img/delete_ic.svg"
                    width="20px"
                    height="20px"
                    alt=""
                  />
                </button>
                <div className="cart-page-pr me-3">
                  <img
                    className="img-fluid"
                    src="/assets/img/product0.jpg"
                    alt=""
                  />
                </div>
                <a href="#" className="dm-text-13">
                  Matt Sublime
                </a>
              </div>
              <p className="dm-text-13 dm-text-700 mb-0">$180.0</p>
              <input
                className="form-control dm-input"
                value="1"
                type="number"
                name="quantity"
                id=""
              />
              <p className="dm-text-13 dm-text-700 mb-0 text-end">$180.0</p>
            </div>
            <div className="cart-row dm-border-b-grey">
              <div className="d-flex align-items-center">
                <button className="btn">
                  <img
                    src="/assets/img/delete_ic.svg"
                    width="20px"
                    height="20px"
                    alt=""
                  />
                </button>
                <div className="cart-page-pr me-3">
                  <img
                    className="img-fluid"
                    src="/assets/img/product0.jpg"
                    alt=""
                  />
                </div>
                <a href="#" className="dm-text-13">
                  Matt Sublime
                </a>
              </div>
              <p className="dm-text-13 dm-text-700 mb-0">$180.0</p>
              <input
                className="form-control dm-input"
                value="1"
                type="number"
                name="quantity"
                id=""
              />
              <p className="dm-text-13 dm-text-700 mb-0 text-end">$180.0</p>
            </div>

            <a className="d-flex align-items-center mt-4" href="#">
              <img
                src="/assets/img/left-slider-arrow.svg"
                className="me-2"
                width="20px"
                height="20px"
                alt=""
              />
              <span className="text-uppercase">continue Shopping</span>
            </a>
          </div>
          <div className="col-3">
            <div className="p-3 dm-border-grey">
              <div className="p-1 dm-border-b-dashed pb-3 mb-3">
                <h2 className="dm-text-700 text-uppercase dm-text-15 mb-4">
                  Cart total
                </h2>
                <p className="dm-text-13 dm-text-700 mb-2">
                  Estimate Shipping and TAX
                </p>
                <p className="dm-text-13 dm-text-grey mb-2">
                  Enter your destination to get a shipping estimate.
                </p>
                <label for="dm-country" className="text-uppercase dm-text-13">
                  Country*
                </label>
                <input
                  type="text"
                  className="form-control dm-input mb-3"
                  placeholder="Your Country"
                />
                <label for="dm-country" className="text-uppercase dm-text-13">
                  State*
                </label>
                <input
                  type="text"
                  className="form-control dm-input mb-3"
                  placeholder="Your Country"
                />
                <label for="dm-country" className="text-uppercase dm-text-13">
                  {" "}
                  ZIP/POSTAL CODE *
                </label>
                <input
                  type="text"
                  className="form-control dm-input mb-3"
                  placeholder="Your Country"
                />
                <button className="btn text-decoration-underline text-uppercase ps-0">
                  Calculate shipping
                </button>
              </div>
              <div className="p-1 dm-border-b-dashed pb-3 mb-3">
                <p className="text-capitalize dm-text-13 mb-2">
                  {" "}
                  Special Instructions For Seller{" "}
                </p>
                <p className="dm-text-grey dm-text-13">
                  Add special instructions for your order...
                </p>
                <textarea
                  name="comment-shipping"
                  id=""
                  className="form-control dm-textarea dm-resize-none"
                  rows="4"
                ></textarea>
              </div>
              <div className="p-1">
                <h2 className="dm-text-700 dm-text-15 text-uppercase">
                  subtotal
                </h2>
                <p className="dm-text-17 dm-text-700 dm-text-24 mb-2">
                  $720.00
                </p>
                <p className="dm-text-13 dm-text-grey">
                  Shipping calculated at checkout
                </p>
                <button className="btn dm-btn-black text-uppercase w-100 rounded-0">
                  proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="section-divider"></div>
      </div>
    </>
  );
}

export default Cart;
