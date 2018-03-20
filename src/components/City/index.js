import React from 'react'
import { translate } from 'react-i18next'

import lodz from '../../../static/locales/en/City.json'

const Recommendation = ({ t, type }) => (
  <div style={{ margin: '1.5rem 0' }}>
    <h4
      className="subtitle is-size-5 has-text-centered"
      style={{ marginBottom: '0.5rem', fontWeight: '600' }}
    >
      {t(`${type}.name`)}
    </h4>
    <ul className="has-text-centered">
      {lodz[type].places.map((el, i) => (
        <li key={i}>
          <a href={t(`${type}.places.${i}.url`)} target="blank">
            {t(`${type}.places.${i}.name`)}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

const City = ({ t }) => (
  <section className="middle-section" id="city">
    <h3 className="title is-size-4 has-text-centered">{t('title')}</h3>
    <p className="has-text-centered">{t('subtitle')}</p>
    <Recommendation type="cafes" t={t} />
    <Recommendation type="restaurants" t={t} />
    <Recommendation type="pubs" t={t} />
    <Recommendation type="sights" t={t} />
  </section>
)

export default translate('City')(City)
