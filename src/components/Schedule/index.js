import React from 'react'
import { translate } from 'react-i18next'

import Map from './map'
import MapWithDirections from './directions'

import { events } from '../../../static/locales/en/Schedule.json'
import './index.scss'

const Event = props => (
  <div>
    <div className="columns is-mobile">
      <div className="column">
        <p className="has-text-right" style={{ fontWeight: 600 }}>
          {props.t(`events.${props.i}.time`)}
        </p>
      </div>
      <div className="column is-two-thirds">
        <p style={{ fontWeight: 600 }}>{props.t(`events.${props.i}.title`)}</p>
        {props.address && (
          <p style={{ margin: '0.5rem 0' }}>
            <a href={props.address.link} target="_blank" style={{ fontSize: '0.95rem' }}>
              {props.t(`events.${props.i}.address.name`)}
            </a>
          </p>
        )}
        <div dangerouslySetInnerHTML={{ __html: props.t(`events.${props.i}.text`) }} />
        {props.calendarLink && (
          <a href={props.calendarLink} target="_blank" style={{ fontSize: '0.85rem' }}>
            {props.t('calendar')}
          </a>
        )}
      </div>
    </div>
    <div className="map">
      {props.directions == null && (
        <Map isMarkerShown lat={props.address.lat} lng={props.address.lng} />
      )}
      {props.directions && <MapWithDirections />}
    </div>
  </div>
)

const Schedule = ({ t }) => (
  <section className="middle-section" id="schedule">
    <h3 className="title is-size-4 has-text-centered">{t('title')}</h3>
    {events.map((el, i) => <Event {...el} key={i} t={t} i={i} />)}
  </section>
)

export default translate('Schedule')(Schedule)
