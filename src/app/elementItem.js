import React from 'react'
import PropTypes from 'prop-types'
import Scroll from 'react-scroll'
import ContentItem from './contentItem'
import BackgroundImage from './backgroundImage'

const Element = Scroll.Element

const ElementItem = ({ item }) => {
  return (
    <Element name={ item.title } className={"element " + item.title}>
      <div className='name'>{item.name}</div>
      <BackgroundImage images={item.images}/>
      <ContentItem item={item}></ContentItem>
    </Element>
  )
}

ElementItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ElementItem
