import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/images/gallery-1.png'
import gallery_2 from '../../assets/images/gallery-2.png'
import gallery_3 from '../../assets/images/gallery-3.png'
import gallery_4 from '../../assets/images/gallery-4.png'
import white_arrow from '../../assets/images/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="gallery image" />
        <img src={gallery_2} alt="gallery image" />
        <img src={gallery_3} alt="gallery image" />
        <img src={gallery_4} alt="gallery image" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="white arrow icon" /></button>
    </div>
  )
}

export default Campus
