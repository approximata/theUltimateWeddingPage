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
            'name': 'welcome',
            'subTitle1': ' házasodunk',
            'icon': 'glyphicon glyphicon-heart-empty',
            'content1': 'panni és máté úttörő lagzi fesztivál',
            'images': ['./app/images/welcome/001.jpg','./app/images/welcome/002.jpg', './app/images/welcome/003.jpg', './app/images/welcome/004.jpg', './app/images/welcome/006.jpg' ],
            'rows':[]
          },
          {
            'title': 'where',
            'name': 'holmikor',
            'subTitle1': ' csillebérci úttörő tábor',
            'icon': 'glyphicon glyphicon-screenshot',
            'content1': '4-es altábor',
            'subTitle2': '2017 július 15 szombat',
            'content2': '17:00 érkezés',
            'link': 'https://www.google.com/maps/place/Csilleb%C3%A9rci+%C3%BAtt%C3%B6r%C5%91+t%C3%A1bor,+4.+alt%C3%A1bor/@47.4934656,18.9564831,17z/data=!3m1!4b1!4m5!3m4!1s0x4741de554ac5fed1:0x853830e074c02ebb!8m2!3d47.4934656!4d18.9586718?hl=hu',
            'images': ['./app/images/where/005.jpg','./app/images/where/002.jpg', './app/images/where/003.jpg', './app/images/where/004.jpg'],
            'rows':[]
          },
          {
            'title': 'program',
            'name': 'program',
            'images': ['./app/images/program/001.jpg', './app/images/program/001.jpg','./app/images/program/002.jpg','./app/images/program/003.jpg','./app/images/program/004.jpg','./app/images/program/006.jpg','./app/images/program/007.jpg','./app/images/program/008.jpg','./app/images/program/009.jpg','./app/images/program/010.jpg','./app/images/program/011.jpg','./app/images/program/012.jpg','./app/images/program/013.jpg','./app/images/program/014.jpg','./app/images/program/015.jpg','./app/images/program/016.jpg','./app/images/program/017.jpg','./app/images/program/018.jpg','./app/images/program/019.jpg','./app/images/program/020.jpg','./app/images/program/021.jpg','./app/images/program/022.jpg','./app/images/program/023.jpg','./app/images/program/024.jpg','./app/images/program/025.jpg'],
            'rows': [
                {'start':'17:00', 'title': 'érkezés', 'icon':'glyphicon glyphicon-ok', 'link':''},
                {'start':'18:00', 'title': 'szertartás', 'icon':'glyphicon glyphicon-star', 'link':''},
                {'start':'18:30', 'title': 'gratuláció', 'icon':'glyphicon glyphicon-glass', 'link':''},
                {'start':'18:45', 'title': 'fotózás', 'icon':'glyphicon glyphicon-camera', 'link':''},
                {'start':'19:00', 'title': 'vacsora', 'icon':'glyphicon glyphicon-cutlery', 'link':'https://www.facebook.com/gnocchifurgon/'},
                {'start':'19:00', 'title': 'dj suhaid', 'icon':'glyphicon glyphicon-cd', 'link':'https://www.mixcloud.com/suhaid/igy-mulat-egy-beates-magyar-ur/'},
                {'start':'20:00', 'title': 'quiz', 'icon':'glyphicon glyphicon-question-sign', 'link':''},
                {'start':'22:00', 'title': 'torta', 'icon':'glyphicon glyphicon-ice-lolly-tasted', 'link':''},
                {'start':'23:00', 'title': 'magic mosquitoz', 'icon':'glyphicon glyphicon-sunglasses', 'link':'https://www.youtube.com/watch?v=IzIpXhomSyU'},
                {'start':'00:30', 'title': 'sanyibácsideszép', 'icon':'glyphicon glyphicon-king', 'link':''},
                {'start':'01:30', 'title': 'jóskapista', 'icon':'glyphicon glyphicon-headphones', 'link':''}
                ]
          },
          {
            'title': 'foodanddrinks',
            'name': 'kajapia',
            'images': ['./app/images/food/001.jpg', './app/images/food/002.jpg', './app/images/food/003.jpg', './app/images/food/004.jpg', './app/images/food/005.jpg'],
            'subTitle1': 'lesz',
            'rows':[]
          },
          {
            'title': 'gift',
            'name': 'ajándék',
            'images': ['./app/images/gift/001.jpg', './app/images/gift/002.jpg', './app/images/gift/003.jpg', './app/images/gift/004.jpg', './app/images/gift/005.jpg', './app/images/gift/006.jpg'],
            'rows':[]
          },
          {
            'title': '',
            'name': '',
            'images': [''],
            'rows':[]
          },
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
