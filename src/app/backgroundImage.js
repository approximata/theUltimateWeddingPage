import React from 'react'
import PropTypes from 'prop-types'

class BackgroundImage extends React.Component{
  constructor (props){
    super(props)

    this.state = {'index': 0}
  }
  _onMouseMove(e){
    let index = e.screenX % this.props.images.length
    this.setState({'index': index})
  }
  render(){
    return (
      <div className="background-image" onMouseMove={this._onMouseMove.bind(this)}>
        <img src={this.props.images[this.state.index]} alt="currentImg"/>
      </div>
    )
  }
}


BackgroundImage.propTypes = {
  images: PropTypes.array
  //  _onMouseMove: PropTypes.func.isRequired
}

export default BackgroundImage
