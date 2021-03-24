import React, { useCallback, useEffect, useState, useMemo } from "react";
import Modal from "react-modal";
import Button from "../../UI-kit/Button/Button";
import Input from "../../UI-kit/Input/Input";
import Select from "../../UI-kit/Select/Select";
import { genres, resetedState, typeAdd, typeEdit } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { addNewMovie, closeCardModal, editMovie, setTypeEvent } from "../../../redux/actions";
import TextArea from "../../UI-kit/TextArea/TextArea";
import "./CardMovieModal.scss";

const CardMovieModal = () => {
  const dispatch = useDispatch();

  const { movies } = useSelector(({ movies }) => movies);
  const { isCardModalOpen, currentCardId, typeEvent } = useSelector(({ modals }) => modals);

  const activeCard = movies.find((card) => card.id === currentCardId);

  const initialState = useMemo(
    () => ({
      title: typeEvent === typeEdit ? activeCard?.title : "",
      releaseDate: typeEvent === typeEdit ? activeCard?.releaseDate : "",
      img: typeEvent === typeEdit ? activeCard?.img : "",
      genre: typeEvent === typeEdit ? activeCard?.genre : "",
      duration: typeEvent === typeEdit ? activeCard?.duration : "",
      rating: typeEvent === typeEdit ? activeCard?.rating : "",
      description: typeEvent === typeEdit ? activeCard?.description : "",
    }),
    [typeEvent, activeCard]
  );

  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (typeEvent) {
      setState(initialState);
    }
  }, [typeEvent, initialState]);

  const handleChange = useCallback((event) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (typeEvent !== typeEdit) {
        dispatch(addNewMovie(state));
        setState(resetedState);
      } else {
        dispatch(editMovie(state, currentCardId));
      }
      dispatch(closeCardModal());
    },
    [state, dispatch, typeEvent, currentCardId]
  );

  const handleReset = useCallback((event) => {
    event.preventDefault();
    setState(resetedState);
  }, []);

  const closeModal = useCallback(() => {
    dispatch(closeCardModal());
    setState({
      title: "",
      releaseDate: "",
      url: "",
      genre: "",
      overview: "",
      runtime: "",
    });
    dispatch(setTypeEvent(null));
  }, [dispatch]);

  return (
    <Modal
      isOpen={isCardModalOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      ariaHideApp={false}
      className="modal"
    >
      <>
        <div className="close" onClick={closeModal} />
        <div className="container">
          <h1 className="title">{typeEvent === typeAdd ? "Add movie" : "Edit movie"}</h1>
          <form className="inputs" onSubmit={handleSubmit}>
            <Input placeholder="Movie title" title="Title" name="title" onChange={handleChange} value={state.title} />
            <Input
              placeholder="Select date"
              title="Release date"
              type="date"
              name="releaseDate"
              onChange={handleChange}
              value={state.releaseDate}
            />
            <Input
              placeholder="Movie URL here"
              title="Movie Poster"
              name="img"
              onChange={handleChange}
              value={state.img}
            />
            <Select title="Genre" options={genres} name="genre" onChange={handleChange} value={state.genre} />
            <Input
              placeholder="Duration"
              title="Duration"
              name="duration"
              value={state.duration}
              onChange={handleChange}
            />
            <Input
              placeholder="Rating here"
              title="Rating"
              name="rating"
              value={state.rating}
              onChange={handleChange}
            />
            <TextArea
              placeholder="Description here"
              title="Description"
              name="description"
              value={state.description}
              onChange={handleChange}
            />
            <div className="buttons">
              <div className="reset-button">
                <Button color="secondary" className="reset-button" type="reset" onClick={handleReset}>
                  Reset
                </Button>
              </div>
              <div>
                <Button color="primary" type="submit">
                  {typeEvent === typeEdit ? "Save" : "Submit"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </>
    </Modal>
  );
};

export default CardMovieModal;
