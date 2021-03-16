import React, { useCallback, useContext, useEffect, useState, useMemo } from "react";
import { StatusModalsContext } from "../../../context/StatusModalsContext";
import Modal from "react-modal";
import Button from "../../UI-kit/Button/Button";
import Input from "../../UI-kit/Input/Input";
import Select from "../../UI-kit/Select/Select";
import { mockedData } from "../../../mockedData";
import { getGenres } from "../../../utils/getGenres";
import { resetedState, typeAdd, typeEdit } from "../../../constants";
import "./CardMovieModal.scss";

const CardMovieModal = () => {
  const { isCardModalOpen, setIsCardModalOpen, typeOfEvent, setTypeOfEvent, idChosenCard } = useContext(
    StatusModalsContext
  );

  const activeCard = mockedData.find((card) => card.id === idChosenCard);

<<<<<<< HEAD
=======
  const resetedState = {
    title: '',
    release_date: '',
    url: '',
    genre: '',
    overview: '',
    runtime: '',
  };

>>>>>>> main
  const initialState = useMemo(
    () => ({
      title: typeOfEvent === typeEdit ? activeCard?.title : "",
      release_date: typeOfEvent === typeEdit ? activeCard.releaseDate : "",
      url: "",
      genre: typeOfEvent === typeEdit ? activeCard.genre.split(", ")[0] : "",
      overview: "",
      runtime: "",
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
      console.log(state);
    },
    [state]
  );

  const handleReset = useCallback((event) => {
    event.preventDefault();
    setState(resetedState);
  }, []);

  const closeModal = useCallback(() => {
    setIsCardModalOpen(false);
    setState({
      title: "",
      release_date: "",
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
              isDate
              name="release_date"
              onChange={handleChange}
              value={state.release_date}
            />
            <Input
              placeholder="Movie URL here"
              title="Movie URL"
              name="url"
              onChange={handleChange}
              value={state.url}
            />
            <Select
              title="Genre"
              options={getGenres(mockedData)}
              name="genre"
              onChange={handleChange}
              value={state.genre}
            />
            <Input
              placeholder="Overview here"
              title="Overview"
              name="overview"
              value={state.overview}
              onChange={handleChange}
            />
            <Input
              placeholder="Runtime here"
              title="Runtime"
              name="runtime"
              value={state.runtime}
              onChange={handleChange}
            />
            <div className="buttons">
              <div className="reset-button">
                <Button color="secondary" className="reset-button" type="reset" onClick={handleReset}>
                  Reset
                </Button>
              </div>
              <div>
<<<<<<< HEAD
                <Button color="primary" type="submit">
                  {typeOfEvent === typeEdit ? "Save" : "Submit"}
                </Button>
=======
                  <Button color='primary' type='submit'>
                    {typeOfEvent === typeEdit ? 'Save': 'Submit'}
                  </Button>
>>>>>>> main
              </div>
            </div>
          </form>
        </div>
      </>
    </Modal>
  );
};

export default CardMovieModal;
