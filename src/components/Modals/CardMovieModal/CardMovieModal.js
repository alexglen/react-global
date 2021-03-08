import React, { useCallback, useContext, useEffect, useState } from "react";
import { StatusModalsContext } from "../../../context/StatusModalsContext";
import Modal from "react-modal";
import Button from "../../UI-kit/Button/Button";
import Input from "../../UI-kit/Input/Input";
import Select from "../../UI-kit/Select/Select";
import { mockedData } from "../../../mockedData";
import { getGenres } from "../../../utils/getGenres";
import "./CardMovieModal.scss";

const CardMovieModal = () => {
    const {isCardModalOpen, setIsCardModalOpen, typeOfEvent, setTypeOfEvent, idChosenCard} = useContext(StatusModalsContext);

    const activeCard = mockedData.find(card => card.id === idChosenCard);

    const initialState = {
      title: typeOfEvent === 'edit' ? activeCard?.title: '',
      release_date: typeOfEvent === 'edit' ? activeCard.releaseDate: '',
      url: '',
      genre: typeOfEvent === 'edit' ? activeCard.genre.split(', ')[0]: '',
      overview: '',
      runtime: ''
    };

 const [state, setState] = useState(initialState);

 console.log(typeOfEvent, 'event');

 useEffect(() => {
   if (typeOfEvent) {
    setState(initialState);
    console.log(typeOfEvent)
   }
 }, [typeOfEvent])

    
  const handleChange = useCallback((event) => {
    setState(state => ({
      ...state,
      [event.target.name]: event.target.value
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    console.log(state);
  }, [state]);

  const handleReset = useCallback((event) => {
    event.preventDefault();
    setState({
      title: '',
     release_date: '',
     url: '',
     genre: '',
     overview: '',
     runtime: ''
    })
  }, [state]);
  

  return (
    <Modal
      isOpen={isCardModalOpen}
      onRequestClose={() => {
        setIsCardModalOpen(false);
        setState({
          title: '',
         release_date: '',
         url: '',
         genre: '',
         overview: '',
         runtime: ''
        })
        setTypeOfEvent(null)
      }}
      contentLabel="Example Modal"
      ariaHideApp={false}
      className={"modal"}
    >
      <>
        <div className="close" onClick={() => {
     
            setIsCardModalOpen(false);
            setState({
              title: '',
             release_date: '',
             url: '',
             genre: '',
             overview: '',
             runtime: ''
            });
setTypeOfEvent(null)
        }} />
        <div className="container">
          <h1 className="title">{typeOfEvent ==='add' ? 'Add movie': 'Edit movie'}</h1>
          <form className="inputs" onSubmit={handleSubmit}>
            <Input
              placeholder="Movie title"
              title="Title"
              name='title'
              onChange={handleChange}
              value={state.title}
            />
            <Input
              placeholder="Select date"
              title="Release date"
              isDate
              name='release_date'
              onChange={handleChange}
              value={state.release_date}
            />
            <Input
              placeholder="Movie URL here"
              title="Movie URL"
              name='url'
              onChange={handleChange}
              value={state.url}
            />
            <Select title="Genre" options={getGenres(mockedData)} name='genre' onChange={handleChange} value={state.genre}/>
            <Input
              placeholder="Overview here"
              title="Overview"
              name='overview'
              value={state.overview}
              onChange={handleChange}
            />
            <Input
              placeholder="Runtime here"
              title="Runtime"
              name='runtime'
              value={state.runtime}
              onChange={handleChange}
            />
            <div className="buttons">
              <div className="reset-button">
                <Button color="secondary" className="reset-button" type='reset' onClick={handleReset}>
                  Reset
                </Button>
              </div>
              <div>
                <Button color="primary" type='submit'>Submit</Button>
              </div>
            </div>
          </form>
        </div>
      </>
    </Modal>
  );
};

export default CardMovieModal;
