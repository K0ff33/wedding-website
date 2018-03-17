import React from 'react'
import PropTypes from 'prop-types'

import FullSizePhoto from '../components/FullSizePhoto'
import Menu from '../components/Menu'
import Header from '../components/Header'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <div className="container-fluid">
      <Header />
      <Menu />
      <div className="columns is-gapless">
        <div className="column">{children()}</div>
        <div className="column is-three-fifths">
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
