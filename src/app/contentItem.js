import React from 'react'
import PropTypes from 'prop-types'
import TableItem from './tableItems'

const ContentItem = ({ item }) => {
  let rows = item.rows
  let table = []
  table = rows.map((itemElem, index) =>
      (<TableItem item={itemElem} key={index}/>))
  return (
    <section className={item.title}>
    <table className='table table-border'><tbody>{table}</tbody></table>
      <div name={ item.subTitle1 } className={item.title + ' subTitle1' + ' container'}>
        <h2><a href={item.link}><span className={ item.icon }></span></a>{item.subTitle1}</h2>
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
