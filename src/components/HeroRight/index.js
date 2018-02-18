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
  >
    <h2 className="subtitle is-size-4">
      <a href="https://goo.gl/maps/yAxX61ECyeC2" target="_blank" style={{ color: 'inherit' }}>
        Łódź, Poland
      </a>
    </h2>
    <h3 className="subtitle is-size-5">Saturday, 12th May 2018</h3>
    <Timer until={new Date(2018, 4, 12, 16, 30)} />
  </section>
)

export default HeroRight
