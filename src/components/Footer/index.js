import React from 'react'
import { translate } from 'react-i18next'

const Footer = ({ t }) => (
  <footer style={{ backgroundColor: 'var(--light-gray)', padding: '0.5rem', fontSize: '0.85rem' }}>
    <div className="content has-text-centered">
      <p dangerouslySetInnerHTML={{ __html: t('text') }} />
    </div>
  </footer>
)

export default translate('Footer')(Footer)
