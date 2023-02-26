import React from "react";
import Modal from "react-bootstrap/Modal";
import { CiSquareRemove } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { closeProfile, closeService } from "../../store/actions";

function ProfileModal() {
  const handleClose = () => dispatch(closeProfile());

  const dispatch = useDispatch();
  const show = useSelector((state) => state.modalsReducer.profileModal);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        id="serviceModal"
        dialogClassName="right-modal"
      >
        <Modal.Body className="p-0">
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="dm-text-700 dm-text-13 text-uppercase">
              Customer Services
            </h5>
            <button
              className="btn p-0"
              onClick={() => dispatch(closeProfile())}
            >
              <CiSquareRemove className="modal-close-ic" />
            </button>
          </div>
          <div className="dm-border-b-grey pb-3 mb-3">
            <label for="user-email" className="text-uppercase dm-text-13">
              EMAIL*
            </label>
            <input
              type="text"
              className="form-control dm-input mb-3"
              placeholder="Your Email Address"
              required
            />
            <label for="user-password" className="text-uppercase dm-text-13">
              PASSWORD*
            </label>
            <input
              type="text"
              className="form-control dm-input mb-3"
              placeholder="Your Email Address"
              required
            />
            <button className="btn dm-btn-black text-uppercase rounded-0 w-100 dm-border dm-text-13 mb-3">
              login
            </button>
            <a
              href="#"
              className="text-uppercase dm-text-13 text-decoration-underline"
            >
              RETURN TO STORE
            </a>
            <button className="btn p-0 rounded-0 dm-text-grey dm-text-13">
              Forgot Your Password?
            </button>
          </div>
          <div className="dm-border-b-grey pb-3">
            <h5 className="dm-text-700 dm-text-13 text-uppercase">SIGN UP</h5>
            <p className="dm-text-13 dm-text-700 mb-2">
              Enjoy the benefits of registering:
            </p>
            <ul className="ps-3 mb-3">
              <li className="dm-text-grey dm-text-13">
                Order: view Order History, track and manage purchases and
                returns
              </li>
              <li className="dm-text-grey dm-text-13">
                Address Book and Card Wallet: safely store delivery and payment
                details for faster checkout
              </li>
              <li className="dm-text-grey dm-text-13">
                Saved for later: wish list your preferred items and track their
                availability
              </li>
            </ul>
            <button className="btn dm-btn-black text-uppercase rounded-0 w-100 dm-border dm-text-13">
              sign up now
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProfileModal;
