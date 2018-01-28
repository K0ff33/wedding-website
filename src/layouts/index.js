import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import BigImage from '../components/BigImage'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Bogusia & Kamil - wedding page"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <div className="container-fluid">
      <div className="columns">
        <div className="column is-three-fifths">
          <BigImage />
        </div>
        <div className="column">{children()}</div>
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
