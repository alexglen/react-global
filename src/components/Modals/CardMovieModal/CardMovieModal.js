import React, { useCallback } from "react";
import Modal from "react-modal";
import Button from "../../UI-kit/Button/Button";
import Input from "../../UI-kit/Input/Input";
import Select from "../../UI-kit/Select/Select";
import { genres, typeAdd, typeEdit } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { addNewMovie, closeCardModal, editMovie, setTypeEvent } from "../../../redux/actions";
import {
  activeCardSelector,
  cardModalOpenSelector,
  currentCardIdSelector,
  typeEventSelector,
} from "../../../redux/selectors/modalsSelectors";
import TextArea from "../../UI-kit/TextArea/TextArea";
import { useFormik } from "formik";
import * as yup from "yup";
import "./CardMovieModal.scss";

const CardMovieModal = () => {
  const dispatch = useDispatch();
  const activeCard = useSelector(activeCardSelector);
  const isCardModalOpen = useSelector(cardModalOpenSelector);
  const currentCardId = useSelector(currentCardIdSelector);
  const typeEvent = useSelector(typeEventSelector);

  const initialValues = {
    title: typeEvent === typeEdit ? activeCard?.title : "",
    releaseDate: typeEvent === typeEdit ? activeCard?.releaseDate : "",
    img: typeEvent === typeEdit ? activeCard?.img : "",
    genre: typeEvent === typeEdit ? activeCard?.genre : "",
    duration: typeEvent === typeEdit ? activeCard?.duration : "",
    rating: typeEvent === typeEdit ? activeCard?.rating : "",
    description: typeEvent === typeEdit ? activeCard?.description : "",
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required("Write your name"),
    releaseDate: yup.string().required("Write release date"),
    img: yup.string().required("Past the url of the movie"),
    genre: yup.string().required("Choose a genre"),
    duration: yup.number().required("Write duration of the movie").typeError("A number is required"),
    rating: yup.number().required("You forgot to write the raiting").typeError("A number is required"),
    description: yup.string().required("Write description"),
  });

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (typeEvent !== typeEdit) {
        dispatch(addNewMovie(values));
        formik.resetForm();
      } else {
        dispatch(editMovie(values, currentCardId));
      }
      dispatch(closeCardModal());
    },
    validationSchema,
  });

  const closeModal = useCallback(() => {
    dispatch(closeCardModal());
    formik.resetForm();
    dispatch(setTypeEvent(null));
  }, [dispatch, formik]);

  const { errors, values, handleChange, handleSubmit, handleReset, touched } = formik;

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
          <h2 className="title">{typeEvent === typeAdd ? "Add movie" : "Edit movie"}</h2>
          <form className="inputs" onSubmit={handleSubmit}>
            <Input placeholder="Movie title" title="Title" name="title" onChange={handleChange} value={values.title} />
            {touched.title && errors.title && <p className="error">{errors.title}</p>}
            <Input
              placeholder="Select date"
              title="Release date"
              type="date"
              name="releaseDate"
              onChange={handleChange}
              value={values.releaseDate}
            />
            {touched.releaseDate && errors.releaseDate && <p className="error">{errors.releaseDate}</p>}
            <Input
              placeholder="Movie URL here"
              title="Movie Poster"
              name="img"
              onChange={handleChange}
              value={values.img}
            />
            {touched.img && errors.img && <p className="error">{errors.img}</p>}
            <Select title="Genre" options={genres} name="genre" onChange={handleChange} value={values.genre} />
            {errors.genre && <p className="error">{errors.genre}</p>}
            <Input
              placeholder="Duration"
              title="Duration"
              name="duration"
              value={values.duration}
              onChange={handleChange}
            />
            {touched.duration && errors.duration && <p className="error">{errors.duration}</p>}
            <Input
              placeholder="Rating here"
              title="Rating"
              name="rating"
              value={values.rating}
              onChange={handleChange}
            />
            {touched.rating && errors.rating && <p className="error">{errors.rating}</p>}
            <TextArea
              placeholder="Description here"
              title="Description"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
            {touched.description && errors.description && <p className="error">{errors.description}</p>}
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
