"use strict"

import React from 'react'
import ReactDOM from 'react-dom'
import Scroll from 'react-scroll'
import NavItem from './navItem'
import ElementItem from './elementItem'

require('./css/index.css')

const Events = Scroll.Events
const scroll = Scroll.animateScroll
const scrollSpy = Scroll.scrollSpy

const durationFn = function(deltaTop) {
    return deltaTop
}

class Section extends React.Component{

  constructor (props){
      super(props)
      this.scrollToTop = this.scrollToTop.bind(this)
      this.state =
      {
      // items: ['welcome', 'where', 'program', 'foodanddrinks', 'pictures', 'accommondation', 'gift' ]
        items: [
          { 'title': 'welcome',
            'name': 'welcome',
            'subTitle1': 'panni és máté úttörő lagzi fesztivál'
          },
          {
            'title': 'where',
            'name': 'holmikor',
            'subTitle1': 'csillebérci úttörő tábor',
            'content1': '4-es altábor',
            'subTitle2': '2017 július 15 szombat',
            'content2': '17:00 érkezés',
            'link': ''
          },
          {
            'title': 'program',
            'name': 'program'
          },
          {
            'title': 'foodanddrinks',
            'name': 'kajapia'
          },
          {
            'title':'pictures',
            'name': 'képek'
          },
          {
            'title':'accommondation',
            'name': 'szállás'
          },
          {
            'title': 'gift',
            'name': 'ajándék'
          }
        ]
      }

  }

  componentDidMount() {


    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments)
    })

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments)
    })

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
    let items = this.state.items
    let navItems = []
    let elementItems = []

    navItems = items.map((item, index) =>
      (<NavItem item={item} key={index}/>)
    )

    elementItems = items.map((item, index) =>
      (<ElementItem item={item} key={index}/>)
    )

    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                {navItems}
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
