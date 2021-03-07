import React, { useCallback, useContext, useState } from "react";
import { StatusModalsContext } from "../../../context/StatusModalsContext";
import Modal from "react-modal";
import Button from "../../UI-kit/Button/Button";
import Input from "../../UI-kit/Input/Input";
import Select from "../../UI-kit/Select/Select";
import { mockedData } from "../../../mockedData";
import { getGenres } from "../../../utils/getGenres";
import "./AddMovieModal.scss";

const AddMovieModal = () => {
    const {isCardModalOpen, setIsCardModalOpen, typeOfEvent} = useContext(StatusModalsContext);

    const func = (event) => {
      event.preventDefault();
      console.log(state);
    }


 const [state, setState] = useState({
     title: '',
     release_date: '',
     url: '',
     genre: '',
     overview: '',
     runtime: ''
 })
    
  const handleChange = useCallback((event) => {
    setState(state => ({
      ...state,
      [event.target.name]: event.target.value
    }));
  }, []);

  return (
    <Modal
      isOpen={isCardModalOpen}
      onRequestClose={() => setIsCardModalOpen(false)}
      contentLabel="Example Modal"
      ariaHideApp={false}
      className={"modal"}
    >
      <>
        <div className="close" onClick={() => setIsCardModalOpen(false)} />
        <div className="container">
          <h1 className="title">{typeOfEvent ==='add' ? 'Add movie': 'Edit movie'}</h1>
          <form className="inputs" onSubmit={func}>
            <Input
              placeholder="Movie title"
              title="Title"
              name='title'
              onChange={handleChange}
            />
            <Input
              placeholder="Select date"
              title="Release date"
              isDate
              name='release_date'
              onChange={handleChange}
            />
            <Input
              placeholder="Movie URL here"
              title="Movie URL"
              name='url'
              onChange={handleChange}
            />
            <Select title="Genre" options={getGenres(mockedData)} name='genre' onChange={handleChange} />
            <Input
              placeholder="Overview here"
              title="Overview"
              name='overview'
              onChange={handleChange}
            />
            <Input
              placeholder="Runtime here"
              title="Runtime"
              name='runtime'
              onChange={handleChange}
            />
            <div className="buttons">
              <div className="reset-button">
                <Button type="secondary" className="reset-button">
                  Reset
                </Button>
              </div>
              <div>
                <Button type="primary">Submit</Button>
              </div>
            </div>
          </form>
        </div>
      </>
    </Modal>
  );
};

export default AddMovieModal;
