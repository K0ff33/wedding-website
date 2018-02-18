import React from 'react'

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
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Documentation</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
