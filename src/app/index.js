"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import Scroll from 'react-scroll'
import NavItem from './navItem'
import ElementItem from './elementItem'

require('./css/index.css')

const Events     = Scroll.Events
const scroll     = Scroll.animateScroll
const scrollSpy  = Scroll.scrollSpy

const durationFn = function(deltaTop) {
    return deltaTop
};

class Section extends React.Component{

  constructor (props){
      super(props)
      this.scrollToTop = this.scrollToTop.bind(this)
      this.state =
    {
      items: ['welcome', 'map', 'program'],
    }
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments)
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments)
    });

    scrollSpy.update()

  }
  scrollToTop() {
    scroll.scrollToTop()
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }
  render () {
    let navItems = this.state.items
    navItems = navItems.map((item, index) =>
      (<NavItem item={item} key={index}/>)
    )
    let elementItems = this.state.items
    elementItems = elementItems.map((item, index) =>
      (<ElementItem item={item} key={index}/>)
    )
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                {navItems}
                <li> <a onClick={() => scroll.scrollToBottom()}>Scroll To Bottom</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          {elementItems}
        </div>
        <a onClick={this.scrollToTop}>To the top!</a>
      </div>
    )
  }
}


ReactDOM.render(
  <Section />,
  document.querySelector('.onepager')
)
