import React from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeFavorites } from "../../store/actions";
import { CiSquareRemove } from "react-icons/ci";
function FavoritesModal() {
  const handleClose = () => dispatch(closeFavorites());

  const dispatch = useDispatch();
  const show = useSelector((state) => state.modalsReducer.favoritesModal);

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
              MY WISHLIST (3)
            </h5>
            <button
              className="btn p-0"
              onClick={() => dispatch(closeFavorites())}
            >
              <CiSquareRemove className="modal-close-ic" />
            </button>
          </div>
          <div className="dm-border-b-grey mb-3">
            <div className="mini-pr pb-3">
              <div className="d-flex">
                <div className="mini-img me-2">
                  <img src="/assets/img/product0.jpg" alt="" />
                </div>
                <div>
                  <p className="dm-text-13 dm-text-700 mb-1">
                    Precision Eyebrow Definer
                  </p>
                  <p className="dm-text-13 dm-text-700 mb-1">$80.00</p>
                  <button className="btn p-0 text-capitalize text-decoration-underline dm-text-13 dm-text-grey">
                    remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FavoritesModal;
