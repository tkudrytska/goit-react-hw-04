import s from "./ImageModal.module.css";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '500px',
    maxHeight: '100vh',
    textAlign: 'center',
    overflowY: 'auto',
  },
};


const ImageModal = ({ item, isOpen, isClose }) => {
    const { description, urls, user, likes, alt_description } = item || {};

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={isClose}
            style={customStyles}
            contentLabel="Image Modal"
            ariaHideApp={false}
        >
            <button type="button" onClick={isClose} className={s.closeBtn}>X</button>
            {urls?.regular && <img src={urls.regular} alt={description || "No description"} className={s.image} />}
            <p><strong>Author:</strong> {user?.name || "Unknown"}</p>
            <p><strong>Likes:</strong> {likes ?? 0}</p>
            <p><strong>Description:</strong> {alt_description || "No additional description"}</p>
        </Modal>
    );
}

export default ImageModal;
