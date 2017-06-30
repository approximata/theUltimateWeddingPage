import React from 'react'
import PropTypes from 'prop-types'

const ContentItem = ({ item }) => {
  return (
    <section>
      <div name={ item.subTitle1 } className={item.title + ' subTitle1'}>
        <h1>{item.subTitle1}</h1>
        <p>{item.content1}</p>
      </div>
      <div name={ item.subTitle2 } className={item.title + ' subTitle2'}>
        <h1>{item.subTitle2}</h1>
        <p>{item.content2}</p>
      </div>
    </section>
  )
}

ContentItem.propTypes = {
  item: PropTypes.object
}

export default ContentItem
