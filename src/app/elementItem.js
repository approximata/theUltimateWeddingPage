import React from 'react'
import PropTypes from 'prop-types'
import Scroll from 'react-scroll'
import LazyLoad from 'react-lazyload'
import ContentItem from './contentItem'
import BackgroundImage from './backgroundImage'


const Element = Scroll.Element

const ElementItem = ({ item }) => {
  return (
    <LazyLoad height={720}>

      <Element name={ item.title } className={"element " + item.title }>
        <BackgroundImage images={item.images}/>
          <div className={item.name + ' title'} >
            <h1>{item.name}</h1>
          </div>
          <ContentItem item={item}/>
      </Element>
    </LazyLoad>
  )
}

ElementItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default ElementItem
