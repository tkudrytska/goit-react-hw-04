import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './SearchBar/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn'
import ImageModal from './ImageModal/ImageModal'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import { fetchPhotos } from '../gallery-api'

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;
    const getImages = async () => {
      try {
        const { results } = await fetchPhotos(query, page);
        setImages(prev => [...prev, ...results]);
        console.log(results);
        
      } catch (error) {
        
      } finally {

      }
    };
    getImages();
  }, [query, page]);

  const handleQuery = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  }

  return (
    <>
      <SearchBar onSubmit={handleQuery} />
      {images.length > 0 && <ImageGallery images={images} />}
      {/* loader */}
      <ErrorMessage />
      <LoadMoreBtn />
      <ImageModal />
    </>
  )
}

export default App
