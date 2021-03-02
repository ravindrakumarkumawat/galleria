import React, { useState } from 'react'
import { Modal } from 'react-bootstrap' 
import './Image.css'

const Image = ({image, user, alt}) => {
  const [lgShow, setLgShow] = useState(false)
  return (
    <div className='image-container' onClick={() => setLgShow(true)}>
      <img src={image.thumb} alt={alt} height="400px"/>
      <div className='image-user'>        
        <img src={user.profile_image.small} alt={user.first_name}/>
        <span>{user.name}</span>        
        <span>{user.total_likes}</span>
      </div>
      <Modal
      size="lg"
      show={lgShow}
      onHide={() => setLgShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
        {user.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={image.small} alt={alt}/>
      </Modal.Body>
    </Modal>
    </div>
  )
}

export default Image
