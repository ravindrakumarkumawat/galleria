import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { singlePagePhotos, searchPhotos } from '../../UnsplashAPI'
import Image from '../Image/Image'
import './ImageList.css'
  
const ImageList = () => {
  const [photos, setPhotos] = useState([])
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
      setPhotos([])
      fetch(`${singlePagePhotos}&page=${page}&per_page=50`).then((res) => res.json()).then(data => setPhotos(data))
  }, [page])
  
  const handleChange = (event) => {
      setInput(event.target.value)
  }

  const handleKeyUp= (event) => {
      let timer

      clearTimeout(timer)
      timer = setTimeout(() => {
        setResults([])
        if(input) {
          fetch(`${searchPhotos}&page=1&query=${input}&per_page=50`).then((res) => res.json()).then(data => setResults(data.results))
        }
      }, 300)
  }

  return (
    <>
      <div className="search-container">
        <input 
          value={input} 
          type='text' 
          placeholder='Search'
          onChange={handleChange}
          onKeyUp={handleKeyUp}
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
      {
        page > 1 && <Button className='page-button' onClick={() => 
          {
            if(page>1) {
              setPage((prevPage) => prevPage - 1)
            } else {
              setPage(1)
            }
        }}>Back</Button>
      }
      
      <Button className='page-button' onClick={() => setPage((prevPage) => prevPage + 1)}>Next</Button>
    </>
  )
}

export default ImageList
