import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './SearchBar/SearchBar'
import ImageGallery from './ImageGallery/ImageGallery'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn'
import ImageModal from './ImageModal/ImageModal'
import ErrorMessage from './ErrorMessage/ErrorMessage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <ImageGallery />
      {/* loader */}
      <ErrorMessage />
      <LoadMoreBtn />
      <ImageModal />
    </>
  )
}

export default App
