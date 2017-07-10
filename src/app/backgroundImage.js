import React from 'react'
import PropTypes from 'prop-types'

class BackgroundImage extends React.Component{
  constructor (props){
    super(props)

    this.state = {'index': 0}
  }
  _onMouseMove(e){
    let divided = e.screenX / 13
    let index = Math.floor(divided % this.props.images.length)
    console.log(index);
    this.setState({'index': index})
  }
  render(){
    return (
      <div className="background-image" onMouseMove={this._onMouseMove.bind(this)}>
        <img src={this.props.images[this.state.index]} className="img-responsive" alt="currentImg"/>
      </div>
    )
  }
}


BackgroundImage.propTypes = {
  images: PropTypes.array
}

export default BackgroundImage
// <img src={this.props.images[this.state.index]} alt="currentImg"/>
