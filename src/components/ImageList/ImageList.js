import React, { useState, useEffect } from 'react'
import { singlePagePhotos, searchPhotos } from '../../UnsplashAPI'
import Image from '../Image/Image'
import './ImageList.css'


  
const ImageList = () => {
  const [photos, setPhotos] = useState([])
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])

  const pageNumber = 1
  useEffect(() => {
      fetch(`${singlePagePhotos}&page=${pageNumber}&per_page=50`).then((res) => res.json()).then(data => setPhotos(data))
  }, [])
  
console.log(photos)
  const handleChange = (event) => {
      setInput(event.target.value)
  }

  const handleKeyPressed= (event) => {
      setResults([])
      if(input) {
        fetch(`${searchPhotos}&page=1&query=${input}&per_page=50`).then((res) => res.json()).then(data => setResults(data.results))
      }
  }

  return (
    <>
      <div className="search-container">
        <input 
          value={input} 
          type='text' 
          placeholder='Search for something...'
          onChange={handleChange}
          onKeyUp={handleKeyPressed}
          className='search-input' />
      </div>
      <div className='imagelist-container'>
      {
        input ?
        (
          results.map((data) => <Image image={data.urls} user={data.user} alt={data.alt_description}/>)
        ):
        (
          photos.map((data) => <Image image={data.urls} user={data.user} alt={data.alt_description}/>)
        )
    }
      </div>
    </>
  )
}

export default ImageList
