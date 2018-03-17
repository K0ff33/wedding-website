import React from 'react'
import Helmet from 'react-helmet'

const Header = () => (
  <Helmet>
    <meta charset="utf-8" />
    <title>Bogusia & Kamil - Wedding Website</title>
    <meta
      name="description"
      content="We are getting married! Here is some more information about our wedding."
    />
    <meta name="image" content="https://bk.wojtczyk.net/img/bk.jpg" />
    <meta itemprop="name" content="Bogusia & Kamil - Wedding Website" />
    <meta
      itemprop="description"
      content="We are getting married! Here is some more information about our wedding."
    />
    <meta itemprop="image" content="https://bk.wojtczyk.net/img/bk.jpg" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Bogusia & Kamil - Wedding Website" />
    <meta
      name="twitter:description"
      content="We are getting married! Here is some more information about our wedding."
    />
    <meta name="twitter:site" content="@kamwojt" />
    <meta name="twitter:image:src" content="https://bk.wojtczyk.net/img/bk.jpg" />
    <meta name="og:title" content="Bogusia & Kamil - Wedding Website" />
    <meta
      name="og:description"
      content="We are getting married! Here is some more information about our wedding."
    />
    <meta name="og:image" content="https://bk.wojtczyk.net/img/bk.jpg" />
    <meta name="og:url" content="https://bk.wojtczyk.net" />
    <meta name="og:site_name" content="Bogusia & Kamil - Wedding Website" />
    <meta name="og:locale" content="en_UK" />
    <meta name="og:type" content="website" />
  </Helmet>
)

export default Header
