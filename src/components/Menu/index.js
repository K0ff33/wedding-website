import React from 'react'
import Scrollspy from 'react-scrollspy'

import './index.scss'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: 0
    }
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    return (
      <div className="hero-head" id="top">
        <nav className="navbar navbar-custom">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="#top">
                <img src="/img/wojtczyk_logo_small.png" alt="Wojtczyk Logo" />
              </a>
              <span
                className={
                  this.state.isActive ? 'navbar-burger burger is-active' : 'navbar-burger burger'
                }
                data-target="navbarMenuHeroB"
                onClick={this.onClick}
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div
              id="navbarMenuHeroB"
              className={
                this.state.isActive ? 'navbar-menu custom is-active' : 'navbar-menu custom'
              }
            >
              <div className="navbar-end">
                <Scrollspy items={['top', 'schedule']} currentClassName="is-active">
                  <a className="navbar-item" href="#top" onClick={this.onClick}>
                    Home
                  </a>
                  <a className="navbar-item" href="#schedule" onClick={this.onClick}>
                    Schedule
                  </a>
                </Scrollspy>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
