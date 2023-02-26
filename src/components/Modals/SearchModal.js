import React from "react";
import Modal from "react-bootstrap/Modal";
import { CiSquareRemove } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { closeSearch } from "../../store/actions";

function SearchModal() {
  const handleClose = () => dispatch(closeSearch());

  const dispatch = useDispatch();
  const show = useSelector((state) => state.modalsReducer.searchModal);

  // console.log(show);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        id="searchModal"
        dialogClassName="m-0"
      >
        <Modal.Body className="p-0">
          <div className="container">
            <div className="d-flex justify-content-between">
              <p className="dm-text-grey text-uppercase mb-0">
                WHAT ARE YOU LOOKING FOR?
              </p>
              <button
                className="btn p-0"
                onClick={() => dispatch(closeSearch())}
              >
                <CiSquareRemove className="modal-close-ic" />
              </button>
            </div>
            <input
              type="text"
              className="form-control main-search rounded-0 border-top-0 border-start-0 border-end-0 ps-0"
              placeholder="Search products..."
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SearchModal;
