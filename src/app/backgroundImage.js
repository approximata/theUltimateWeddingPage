import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
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
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <img src={this.props.images[this.state.index]} className="bg-img" alt="currentImg"/>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}


BackgroundImage.propTypes = {
  images: PropTypes.array
}

export default BackgroundImage
// <img src={this.props.images[this.state.index]} alt="currentImg"/>
