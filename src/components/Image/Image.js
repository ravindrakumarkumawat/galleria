import React from 'react'
import './Image.css'

const Image = ({image, user}) => {
  console.log(image)
  return (
    <div className='image-container'>
      <img src={image.thumb}/>
      <div className='image-user'>        
        <img src={user.profile_image.small}/>
        <span>{user.name}</span>        
        <span>{user.total_likes}</span>
      </div>
    </div>
  )
}

export default Image
