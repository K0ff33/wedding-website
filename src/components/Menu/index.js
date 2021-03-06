import React from 'react'
import { translate } from 'react-i18next'

import LanguageSwitcher from '../LanguageSwitcher'
import menuItems from '../../../static/locales/en/Menu.json'

import './index.scss'

class Menu extends React.Component {
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
    const t = this.props.t

    return (
      <nav className="navbar is-fixed-top custom">
        <div className="navbar-brand">
          <a className="navbar-item" href="#top">
            <img src="/img/bk_small.png" alt="Bogusia & Kamil Logo" />
          </a>

          <span
            className={
              this.state.isActive ? 'navbar-burger burger is-active' : 'navbar-burger burger'
            }
            data-target="navbar"
            onClick={this.onClick}
          >
            <span />
            <span />
            <span />
          </span>
        </div>

        <div id="navbar" className={this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            {menuItems.nav.map((item, index) => (
              <a
                className="navbar-item"
                href={`#${item.href}`}
                key={item.name}
                onClick={this.onClick}
              >
                {t(`nav.${index}.name`)}
              </a>
            ))}
          </div>

          <div className="navbar-end">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    )
  }
}

export default translate('Menu')(Menu)
