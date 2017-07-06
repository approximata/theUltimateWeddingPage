import React from 'react'
import PropTypes from 'prop-types'


const BackgroundImage = ({ images }) => {
  let index = 0
  const _onMouseMove = (e) => {
    let mouseIndex = 0
    console.log(images);
    mouseIndex = e.screenX
    index = mouseIndex % images.length
    console.log(index)
  }


  return (
    <div className="background-image" onMouseMove={_onMouseMove}>
      <img src={images[index]} alt="currentImg"/>
    </div>
  )
}

BackgroundImage.propTypes = {
  images: PropTypes.array
  // _onMouseMove: PropTypes.func.isRequired
}

export default BackgroundImage
