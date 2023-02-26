import React from "react";
import Modal from "react-bootstrap/Modal";
import { CiSquareRemove } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { closeService } from "../../store/actions";

function ServiceModal() {
  const handleClose = () => dispatch(closeService());

  const dispatch = useDispatch();
  const show = useSelector((state) => state.modalsReducer.serviceModal);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        id="serviceModal"
        dialogClassName="right-modal"
      >
        <Modal.Body className="p-0">
          <div className="d-flex align-items-start">
            <p className="dm-text-grey dm-text-13">
              Have a question? You may find an answer in our FAQs. But you can
              also contact us:
            </p>
            <button
              className="btn p-0"
              onClick={() => dispatch(closeService())}
            >
              <CiSquareRemove className="modal-close-ic" />
            </button>
          </div>
          <div className="dm-border-b-grey pb-3">
            <h5 className="dm-text-700 dm-text-13">Customer Services</h5>
            <div className="d-flex align-items-center">
              <img src="/assets/img/phone.svg" alt="" />
              <p className="mb-0 dm-text-grey m-lg-2 dm-text-13">
                Call Us: 800-123-4567
              </p>
            </div>
            <div className="d-flex align-items-start">
              <img className="mt-2" src="/assets/img/clock-ic.svg" alt="" />
              <div className="mb-0 dm-text-grey m-lg-2 dm-text-13">
                <div>
                  <p className="dm-text-grey dm-text-13 mb-0">
                    Mon-Fri: 9:00 am - 6:00 pm
                  </p>
                  <p className="dm-text-grey dm-text-13 mb-0">
                    Sat: 9:00 am - 4:00 pm
                  </p>
                  <p className="dm-text-grey dm-text-13 mb-0">
                    Sun: 9:00 am - 2:00 pm
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img src="/assets/img/phone.svg" alt="" />
              <p className="mb-0 dm-text-grey ms-2 dm-text-13">
                Call Us: 800-123-4567
              </p>
            </div>
          </div>
          <div className="dm-border-b-grey pb-3">
            <h3 className="pt-3 text-uppercase dm-text-13 dm-text-700 mb-2">
              SHIPPING
            </h3>
            <div className="d-flex align-items-start">
              <img className="mt-2" src="/assets/img/clock-ic.svg" alt="" />
              <div className="mb-0 dm-text-grey m-lg-2 dm-text-13">
                <p className="dm-text-grey dm-text-13 mb-0">
                  Free shippingdelivery all orders of $49 or more of eligible
                  items across any product category qualify.
                </p>
              </div>
            </div>
          </div>
          <div className="dm-border-b-grey pb-3">
            <h3 className="pt-3 text-uppercase dm-text-13 dm-text-700 mb-2">
              PAYMENTS
            </h3>
            <p className="dm-text-13 dm-text-700 mb-2">
              Accepts the following payment methods:
            </p>
            <div className="d-flex align-items-start">
              <img className="mt-2" src="/assets/img/cart-ic.svg" alt="" />
              <div className="mb-0 dm-text-grey m-lg-2 dm-text-13">
                <p className="dm-text-grey dm-text-13 mb-0">
                  Credit Card: Visa, MasterCard, Maestro, American Express. The
                  total will be charged to your card when the order is shipped.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <img className="mt-2" src="/assets/img/lock-ic.svg" alt="" />
              <div className="mb-0 dm-text-grey m-lg-2 dm-text-13">
                <p className="dm-text-grey dm-text-13 mb-0">
                  PayPal: Shop easily online without having to enter your credit
                  card details on the website.
                </p>
              </div>
            </div>
          </div>
          <div className="dm-border-b-grey pb-3">
            <h3 className="pt-3 text-uppercase dm-text-13 dm-text-700 mb-2">
              RETURN POLICY
            </h3>
            <div className="d-flex align-items-start">
              <img className="mt-2" src="/assets/img/return-ic.svg" alt="" />
              <div className="mb-0 dm-text-grey m-lg-2 dm-text-13">
                <p className="dm-text-grey dm-text-13 mb-0">
                  Free shippingdelivery all of $49 or more of eligible items
                  across any product category qualify.
                </p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ServiceModal;
