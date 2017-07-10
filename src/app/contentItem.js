import React from 'react'
import PropTypes from 'prop-types'

const ContentItem = ({ item }) => {
  return (
    <section className={item.title}>
      <div name={ item.subTitle1 } className={item.title + ' subTitle1' + ' container'}>
        <h2><span className={ item.icon }></span>{item.subTitle1}</h2>
        <p>{item.content1}</p>
      </div>
      <div name={ item.subTitle2 } className={item.title + ' subTitle2' + ' container'}>
        <h2>{item.subTitle2}</h2>
        <p>{item.content2}</p>
      </div>
    </section>
  )
}

ContentItem.propTypes = {
  item: PropTypes.object
}

export default ContentItem
