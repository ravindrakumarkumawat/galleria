import React, { useState } from 'react'
import { Modal } from 'react-bootstrap' 
import './Image.css'

const Image = ({image, user, alt}) => {
  const [lgShow, setLgShow] = useState(false)
  return (
    <div className='image-container' onClick={() => setLgShow(true)}>
      <img src={image.thumb} alt={alt} />
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          <div className='image-user'>        
            <div>
              <img src={user.profile_image.small} alt={user.first_name}/>
            </div>
            <div>
              <h1>{user.name} </h1>
              <p className='followers'>Likes: {user.total_likes}</p>
            </div>
          </div>
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={image.small} alt={alt} width='100%' /> 
          
          </Modal.Body>
      </Modal>
    </div>
  )
}

export default Image
