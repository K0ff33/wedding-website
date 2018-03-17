import React from 'react'
import Map from './map'

const events = [
  {
    title: 'Wedding Ceremony',
    time: '4.30pm',
    text: (
      <div>
        <p>We're getting married!</p>
        <p>Please come at least at 4.15pm</p>
      </div>
    ),
    address: {
      name: 'Registry Office, Pabianicka 2, Łódź',
      link: 'https://goo.gl/maps/JH9gs6QSYDN2',
      lat: 51.737941,
      lng: 19.4632585
    },
    calendarLink:
      "https://calendar.google.com/calendar/r/eventedit?dates=20180512T153000Z/20180512T160000Z&ctz=Europe%2FWarsaw&location=Registry+Office,+Pabianicka,+%C5%81%C3%B3d%C5%BA,+Poland&text=Bogusia+%26+Kamil's+Wedding+Ceremony&details=We%27re+getting+married!+Please+come+at+least+4.15pm+"
  },
  {
    title: 'Wedding Reception',
    time: '5.30pm',
    text: (
      <div>
        <p>It's party time!</p>
        <p>We encourage everyone to grab some drinks and get out on the dance floor.</p>
        <p>Don't be shy. We're all family and friends.</p>
      </div>
    ),
    address: {
      name: 'Format, Tymienieckiego 3, Łódź',
      link: 'https://goo.gl/maps/EbnrVMVeVnK2',
      lat: 51.7483251,
      lng: 19.4620527
    },
    calendarLink:
      "https://calendar.google.com/calendar/r/eventedit?dates=20180512T163000Z/20180513T010000Z&ctz=Europe%2FWarsaw&location=Format,+%C5%81%C3%B3d%C5%BA,+Poland&text=Bogusia+%26+Kamil's+Wedding+Reception"
  }
]

const Event = props => (
  <div>
    <div className="columns is-mobile">
      <div className="column">
        <p className="has-text-right">{props.time}</p>
      </div>
      <div className="column is-two-thirds">
        <p>{props.title}</p>
        <p style={{ margin: '0.5rem 0' }}>
          <a href={props.address.link} target="_blank" style={{ fontSize: '0.95rem' }}>
            {props.address.name}
          </a>
        </p>
        <p>{props.text}</p>
        <a href={props.calendarLink} target="_blank" style={{ fontSize: '0.85rem' }}>
          Add to calendar
        </a>
      </div>
    </div>
    <div
      style={{
        display: 'block',
        padding: '50px 0',
        marginTop: '-15px'
      }}
    >
      <Map isMarkerShown lat={props.address.lat} lng={props.address.lng} />
    </div>
  </div>
)

const Schedule = () => (
  <section className="middle-section" id="schedule">
    <h3 className="title is-size-5 has-text-centered">Schedule</h3>
    {events.map((el, i) => <Event {...el} key={i} />)}
  </section>
)

export default Schedule
