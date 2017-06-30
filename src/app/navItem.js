import React from 'react'
import Scroll from 'react-scroll'
import PropTypes from 'prop-types'

const Link = Scroll.Link

const NavItem = ({ item }) => {
  return (
    <li><Link activeClass="active" className={item.title} to={item.title} spy={true} smooth={true} duration={500} >{item.name}</Link></li>
  )
}

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default NavItem
