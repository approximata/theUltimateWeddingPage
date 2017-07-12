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

const welcome = document.querySelector('.element.welcome')


class Section extends React.Component{

  constructor (props){
      super(props)
      this.scrollToTop = this.scrollToTop.bind(this)
      this.state =
      {
        items: [
          { 'title': 'welcome',
            'name': '#welcome',
            'subTitle1': ' házasodunk',
            'icon': 'glyphicon glyphicon-heart-empty',
            'content1': 'panni és máté úttörő lagzi fesztivál',
            'images': ['./app/images/welcome/001.jpg','./app/images/welcome/002.jpg', './app/images/welcome/003.jpg', './app/images/welcome/004.jpg', './app/images/welcome/005.jpg', './app/images/welcome/006.jpg' ]
          },
          {
            'title': 'where',
            'name': '#holmikor',
            'subTitle1': ' csillebérci úttörő tábor',
            'icon': 'glyphicon glyphicon-road',
            'content1': '4-es altábor',
            'subTitle2': '2017 július 15 szombat',
            'content2': '17:00 érkezés',
            'link': '',
            'images': ['./app/images/where/005.jpg','./app/images/where/002.jpg', './app/images/where/003.jpg', './app/images/where/004.jpg']
          },
          {
            'title': 'program',
            'name': 'program',
            'images': ['./app/images/program/001.jpg', './app/images/program/001.jpg','./app/images/program/002.jpg','./app/images/program/003.jpg','./app/images/program/004.jpg','./app/images/program/006.jpg','./app/images/program/007.jpg','./app/images/program/008.jpg','./app/images/program/009.jpg','./app/images/program/010.jpg','./app/images/program/011.jpg','./app/images/program/012.jpg','./app/images/program/013.jpg','./app/images/program/014.jpg','./app/images/program/015.jpg','./app/images/program/016.jpg','./app/images/program/017.jpg','./app/images/program/018.jpg','./app/images/program/019.jpg','./app/images/program/020.jpg','./app/images/program/021.jpg','./app/images/program/022.jpg','./app/images/program/023.jpg','./app/images/program/024.jpg','./app/images/program/025.jpg']
          },
          {
            'title': 'foodanddrinks',
            'name': 'kajapia',
            'images': ['./images/welcome/002.jpg', './images/welcome/003.jpg'],
            'index': 0
          },
          {
            'title':'pictures',
            'name': 'képek',
            'images': ['./images/welcome/002.jpg', './images/welcome/003.jpg'],
            'index': 0
          },
          {
            'title':'accommondation',
            'name': 'szállás',
            'images': ['./images/welcome/002.jpg', './images/welcome/003.jpg'],
            'index': 0
          },
          {
            'title': 'gift',
            'name': 'ajándék',
            'images': ['./images/welcome/002.jpg', './images/welcome/003.jpg'],
            'index': 0
          }
        ],
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

  // _onMouseMove(e) {
  //   console.log(e.screenX, e.screenY)
  //   let index = 0
  // }

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
        <div name="mainElement" >
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
