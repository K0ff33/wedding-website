import React from 'react'
import Timer from './timer'

const HeroRight = () => (
  <section
    className="hero is-fullheight"
    style={{
      backgroundImage: 'url(/img/leafs.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    id="top"
  >
    <h2 className="subtitle is-size-4">
      <a href="https://goo.gl/maps/yAxX61ECyeC2" target="_blank" style={{ color: 'inherit' }}>
        Łódź, Poland
      </a>
    </h2>
    <h3 className="subtitle is-size-5">
      <a
        href="https://calendar.google.com/calendar/r/eventedit?dates=20180512T153000Z/20180512T160000Z&ctz=Europe%2FWarsaw&location=Registry+Office,+Pabianicka,+%C5%81%C3%B3d%C5%BA,+Poland&text=Bogusia+%26+Kamil's+Wedding&details=We%27re+getting+married!+Please+come+at+least+4.15pm+"
        target="_blank"
        style={{ color: 'inherit' }}
      >
        Saturday, 12th May 2018
      </a>
    </h3>
    <Timer until={new Date(2018, 4, 12, 16, 30)} />
  </section>
)

export default HeroRight
