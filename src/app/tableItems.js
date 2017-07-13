import React from 'react'
import PropTypes from 'prop-types'

const TableItem = ({ item }) => {
  let link = item.link !== '' ? <td key='link'><a href={item.link}><span className='glyphicon glyphicon-share-alt'></span></a></td> : ''


  return (
    <tr>
      <td key='icon'><span className={ item.icon }></span></td>
      <td key={item.title}>{item.title}</td>
      <td key={item.start}>{item.start}</td>
      {link}
    </tr>
  )
}

TableItem.propTypes = {
  item: PropTypes.object
}

export default TableItem
