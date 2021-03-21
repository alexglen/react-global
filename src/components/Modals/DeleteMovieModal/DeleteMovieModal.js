import React, { useContext } from "react";
import Modal from "react-modal";
import Button from "../../UI-kit/Button/Button";
import { StatusModalsContext } from "../../../context/StatusModalsContext";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../../redux/actions";
import { useHistory } from "react-router";
import "./DeleteMovieModal.scss";

const DeleteMovieModal = () => {
  const { isDeleteModalOpen, setIsDeleteModalOpen, idChosenCard } = useContext(StatusModalsContext);

  const history = useHistory();

  const dispatch = useDispatch();

  const deleteMovieCard = () => {
    dispatch(deleteMovie(idChosenCard));
    setIsDeleteModalOpen(false);
    history.push("/");
  };

  const closeModal = () => setIsDeleteModalOpen(false);

  return (
    <Modal isOpen={isDeleteModalOpen} onRequestClose={closeModal} className="modal" ariaHideApp={false}>
      <>
        <div className="close" onClick={closeModal} />
        <div className="container">
          <h1 className="title">Delete movie</h1>
          <p className="text">Are you show you want to delete this movie?</p>
          <div className="button">
            <Button color="primary" onClick={deleteMovieCard}>
              Confirm
            </Button>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default DeleteMovieModal;
