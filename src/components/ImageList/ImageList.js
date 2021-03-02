import React, { useState, useEffect } from 'react'
import { singlePagePhotos } from '../../UnsplashAPI'
import Image from '../Image/Image'
import './ImageList.css'

const ImageList = () => {
  const [photos, setPhotos] = useState([])
  const pageNumber = 2
  useEffect(() => {
    fetch(`${singlePagePhotos}${pageNumber}`).then((res) => res.json()).then(data => setPhotos(data))
  }, [])
  return (
    <div className='imagelist-container'>
    {
      photos.map((data) => <Image image={data.urls} user={data.user}/>)
    }
    </div>
  )
}

export default ImageList
