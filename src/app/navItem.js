import React from 'react'
import Scroll from 'react-scroll'
import PropTypes from 'prop-types'

const Link = Scroll.Link

const NavItem = ({ item }) => {
  return (
    <li><Link activeClass="active" className={item} to={item} spy={true} smooth={true} duration={500} >{item}</Link></li>
  )
}

NavItem.propTypes = {
  item: PropTypes.string.isRequired,
}


export default NavItem
