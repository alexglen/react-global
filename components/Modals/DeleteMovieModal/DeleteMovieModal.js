import Modal from 'react-modal';
import Button from '../../UI-kit/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { closeDeleteModal, deleteMovie } from '../../../redux/actions';
// import { useHistory } from 'react-router';
import {
  currentCardIdSelector,
  deleteModalOpenSelector,
} from '../../../redux/selectors/modalsSelectors';
import styles from './DeleteMovieModal.module.scss';

const DeleteMovieModal = () => {
  const isDeleteModalOpen = useSelector(deleteModalOpenSelector);
  const currentCardId = useSelector(currentCardIdSelector);

  // const { push } = useHistory();

  const dispatch = useDispatch();

  const deleteMovieCard = () => {
    dispatch(deleteMovie(currentCardId));
    dispatch(closeDeleteModal());
    // push('/');
  };

  const closeModal = () => dispatch(closeDeleteModal());

  return (
    <Modal
      isOpen={isDeleteModalOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      ariaHideApp={false}>
      <>
        <div className={styles.close} onClick={closeModal} />
        <div className={styles.container}>
          <h1 className={styles.title}>Delete movie</h1>
          <p className={styles.text}>Are you show you want to delete this movie?</p>
          <div className={styles.button}>
            <Button color='primary' onClick={deleteMovieCard}>
              Confirm
            </Button>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default DeleteMovieModal;
