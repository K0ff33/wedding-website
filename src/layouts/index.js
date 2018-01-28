import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import HeroLeft from '../components/HeroLeft'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Bogusia & Kamil Wojtczyk"
      meta={[
        {
          name: 'description',
          content: 'We are getting married! Here is some more information about our wedding.'
        },
        { name: 'keywords', content: 'Bogusia, Bogumiła, Kamil, Wojtczyk, wedding, wedding site' }
      ]}
    />
    <div className="container-fluid">
      <div className="columns is-gapless">
        <div className="column is-three-fifths">
          <HeroLeft />
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
