import React from 'react'
import PropTypes from 'prop-types'
import Scroll from 'react-scroll'
import ContentItem from './contentItem'
import BackgroundImage from './backgroundImage'

const Element = Scroll.Element

const ElementItem = ({ item }) => {
  return (
    <Element name={ item.title } className={"element " + item.title}>
      <BackgroundImage images={item.images}/>
      <div className='name'>{item.name}</div>
      <ContentItem item={item}></ContentItem>
    </Element>
  )
}


// class ElementItem extends React.Component{
//   constructor (props){
//     super(props)
//     this.state = {'index': 0}
//   }
//   _onMouseMove(e){
//     let divided = e.screenX / 20
//     let index = Math.floor(divided % this.props.item.images.length)
//     console.log(index);
//     this.setState({'index': index})
//   }
//   render(){
//     return (
//       <Element name={ this.props.item.title } className={"element " + this.props.item.title} onMouseMove={this._onMouseMove.bind(this)} style={{backgroundImage : 'url(' + this.props.item.images[this.state.index] +')'}}>
//         <div className='name'>{this.props.item.name}</div>
//         <ContentItem item={this.props.item}></ContentItem>
//         <p>csacs</p>
//       </Element>
//     )
//   }
// }



ElementItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default ElementItem
