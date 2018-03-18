import React from 'react'
import { translate } from 'react-i18next'

import './index.scss'

import { questionsAnswers } from '../../../static/locales/en/FAQ.json'

const QandA = props => (
  <div className="qa-wrapper">
    <div className="question">
      <span>Q:</span>
      {props.t(`questionsAnswers.${props.i}.q`)}
    </div>
    <div
      className="answer"
      dangerouslySetInnerHTML={{ __html: props.t(`questionsAnswers.${props.i}.a`) }}
    />
  </div>
)

const FAQ = ({ t }) => (
  <section className="middle-section" id="qa">
    <h3 className="title is-size-4 has-text-centered">{t('title')}</h3>
    <p className="has-text-centered">{t('subtitle')}</p>
    <div style={{ marginTop: '3rem' }}>
      {questionsAnswers.map((el, i) => <QandA {...el} key={i} i={i} t={t} />)}
    </div>
  </section>
)

export default translate('FAQ')(FAQ)
