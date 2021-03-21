import React, { useCallback, useContext, useEffect, useState, useMemo } from "react";
import { StatusModalsContext } from "../../../context/StatusModalsContext";
import Modal from "react-modal";
import Button from "../../UI-kit/Button/Button";
import Input from "../../UI-kit/Input/Input";
import Select from "../../UI-kit/Select/Select";
import { genres, resetedState, typeAdd, typeEdit } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { addNewMovie, editMovie } from "../../../redux/actions";
import "./CardMovieModal.scss";

const CardMovieModal = () => {
  const { isCardModalOpen, setIsCardModalOpen, typeOfEvent, setTypeOfEvent, idChosenCard } = useContext(
    StatusModalsContext
  );

  const dispatch = useDispatch();

  const { movies } = useSelector(({ moviesReducer }) => moviesReducer);

  const activeCard = movies.find((card) => card.id === idChosenCard);

  const initialState = useMemo(
    () => ({
      title: typeOfEvent === typeEdit ? activeCard?.title : "",
      releaseDate: typeOfEvent === typeEdit ? activeCard?.releaseDate : "",
      img: typeOfEvent === typeEdit ? activeCard?.img : "",
      genre: typeOfEvent === typeEdit ? activeCard?.genre : "",
      duration: typeOfEvent === typeEdit ? activeCard?.duration : "",
      rating: typeOfEvent === typeEdit ? activeCard?.rating : "",
      description: typeOfEvent === typeEdit ? activeCard?.description : "",
    }),
    [typeOfEvent, activeCard]
  );

  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (typeOfEvent) {
      setState(initialState);
    }
  }, [typeOfEvent, initialState]);

  const handleChange = useCallback((event) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (typeOfEvent !== typeEdit) {
        dispatch(addNewMovie(state));
        setIsCardModalOpen(false);
        setState(resetedState);
      } else {
        dispatch(editMovie(state, idChosenCard));
        setIsCardModalOpen(false);
      }
    },
    [state, dispatch, setIsCardModalOpen, typeOfEvent, idChosenCard]
  );

  const handleReset = useCallback((event) => {
    event.preventDefault();
    setState(resetedState);
  }, []);

  const closeModal = useCallback(() => {
    setIsCardModalOpen(false);
    setState({
      title: "",
      releaseDate: "",
      url: "",
      genre: "",
      overview: "",
      runtime: "",
    });
    setTypeOfEvent(null);
  }, [setIsCardModalOpen, setTypeOfEvent]);

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
          <h1 className="title">{typeOfEvent === typeAdd ? "Add movie" : "Edit movie"}</h1>
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
            <Input
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
                  {typeOfEvent === typeEdit ? "Save" : "Submit"}
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
