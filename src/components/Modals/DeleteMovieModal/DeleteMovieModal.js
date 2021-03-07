import React, { useContext } from "react";
import Modal from "react-modal";
import { StatusModalsContext } from "../../../context/StatusModalsContext";
import Button from "../../UI-kit/Button/Button";
import PropTypes from "prop-types";
import "./DeleteMovieModal.scss";

const DeleteMovieModal = ({ id }) => {
  const { isDeleteModalOpen, setIsDeleteModalOpen, idChosenCard } = useContext(
    StatusModalsContext
  );
  return (
    <Modal
      isOpen={isDeleteModalOpen}
      onRequestClose={() => setIsDeleteModalOpen(false)}
      className="modal"
    >
      <>
        <div className="close" onClick={() => setIsDeleteModalOpen(false)} />
        <div className="container">
          <h1 className="title">Delete movie</h1>
          <p className="text">Are you show you want to delete this movie?</p>
          <div className="button">
            <Button
              type="primary"
              onClick={() => alert(`Movie with ${idChosenCard} was deleted`)}
            >
              Confirm
            </Button>
          </div>
        </div>
      </>
    </Modal>
  );
};

DeleteMovieModal.propTypes = {
    id: PropTypes.string,
};
  

export default DeleteMovieModal;
