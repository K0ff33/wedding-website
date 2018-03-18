import React from 'react'
import { translate } from 'react-i18next'
import Timer from './timer'

const Intro = ({ t, i18n }) => (
  <section
    className="hero is-fullheight"
    style={{
      backgroundImage: 'url(/img/FrmtWhitePanel.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    id="top"
  >
    <img
      src="/img/Bogusia_and_Kamil.png"
      alt="Bogusia & Kamil"
      style={{ margin: '2rem', height: 'auto', width: '300px' }}
    />
    <h3 className="subtitle is-size-5">{t('date')}</h3>
    <Timer until={new Date(2018, 4, 12, 16, 30)} lang={i18n.language} />
    <h4 className="subtitle is-size-6">❤️</h4>
  </section>
)

export default translate('Intro')(Intro)
