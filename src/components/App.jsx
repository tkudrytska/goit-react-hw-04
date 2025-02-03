import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './SearchBar/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn'
import ImageModal from './ImageModal/ImageModal'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import { fetchPhotos } from '../gallery-api'
import Loader from './Loader/Loader'
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [viewImage, setViewImage] = useState({});

  useEffect(() => {
    if (!query) return;
    const getImages = async () => {
      try {
        setLoading(true);
        const { results } = await fetchPhotos(query, page);
        setImages(prev => [...prev, ...results]);
      } catch (error) {
        setError(true);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleQuery = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  }

  const handlePage = () => setPage(prev => prev + 1);

  const handleImageClick = (image) => {
    setViewImage(image);
    setIsOpen(true);
};

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSubmit={handleQuery} />
      {images.length > 0 && <ImageGallery images={images} onClick={handleImageClick} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <LoadMoreBtn onClick={handlePage} />}
      {modalIsOpen && <ImageModal item={viewImage} isOpen={modalIsOpen} isClose={closeModal} />}
    </>
  )
}

export default App
