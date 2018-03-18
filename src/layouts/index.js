import React from 'react'
import PropTypes from 'prop-types'

import FullSizePhoto from '../components/FullSizePhoto'
import Menu from '../components/Menu'
import Header from '../components/Header'
import I18N from './i18n'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <Menu />
    <div className="container-fluid" id="top">
      <div className="columns is-gapless">
        <div className="column">{children()}</div>
        <div className="column is-three-fifths is-hidden-mobile">
          <FullSizePhoto />
        </div>
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
