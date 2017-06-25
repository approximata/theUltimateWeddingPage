import React from 'react'
import PropTypes from 'prop-types'
import Scroll from 'react-scroll'
const Element = Scroll.Element

require('./css/elementItem.css')

const ElementItem = ({ item }) => {
  return (
    <Element name={ item } className="element" >
      {item}
    </Element>
  );
};

ElementItem.propTypes = {
  item: PropTypes.string.isRequired,
};


export default ElementItem;
