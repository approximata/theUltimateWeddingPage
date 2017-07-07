import React from 'react'
import PropTypes from 'prop-types'

class BackgroundImage extends React.Component{
  constructor (props){
    super(props)

    this.state = {'index': 0}
  }
  _onMouseMove(e){
    let divided = e.screenX / 11
    let index = Math.floor(divided % this.props.images.length)
    console.log(index);
    this.setState({'index': index})
  }
  render(){
    return (
      <div className="background-image" onMouseMove={this._onMouseMove.bind(this)}>
      <p>"sdadasdas"</p>
      <img src={this.props.images[this.state.index]} alt="currentImg"/>

      </div>
    )
  }
}


BackgroundImage.propTypes = {
  images: PropTypes.array
}

export default BackgroundImage
// <img src={this.props.images[this.state.index]} alt="currentImg"/>
