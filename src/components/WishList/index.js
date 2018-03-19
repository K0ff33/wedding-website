import React from 'react'
import { translate } from 'react-i18next'

const WishList = ({ t }) => (
  <section className="middle-section" id="wishlist">
    <h3 className="title is-size-4 has-text-centered">{t('title')}</h3>
    <p className="has-text-centered" dangerouslySetInnerHTML={{ __html: t('text') }} />
  </section>
)

export default translate('WishList')(WishList)
