import React from 'react'
import Helmet from 'react-helmet'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

const title = 'Bogusia & Kamil - Wedding Website'
const description = `We are getting married in ${distanceInWordsToNow(
  new Date(2018, 4, 12, 16, 30),
  { includeSeconds: true }
)}! Here is some more information about our wedding.`
const baseUrl = 'https://bk.wojtczyk.net'
const imageUrl = `${baseUrl}/img/bk.jpg`

const Header = () => (
  <Helmet>
    <meta charset="utf-8" />
    <title>Bogusia & Kamil - Wedding Website</title>
    <meta name="description" content={{ description }} />
    <meta name="image" content={{ imageUrl }} />
    <meta itemprop="name" content={{ title }} />
    <meta itemprop="description" content={{ description }} />
    <meta itemprop="image" content={{ imageUrl }} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={{ title }} />
    <meta name="twitter:description" content={{ description }} />
    <meta name="twitter:site" content="@kamwojt" />
    <meta name="twitter:image:src" content={{ imageUrl }} />
    <meta name="og:title" content={{ title }} />
    <meta name="og:description" content={{ description }} />
    <meta name="og:image" content={{ imageUrl }} />
    <meta name="og:url" content={{ baseUrl }} />
    <meta name="og:site_name" content={{ title }} />
    <meta name="og:locale" content="en_UK" />
    <meta name="og:type" content="website" />
    <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" />
  </Helmet>
)

export default Header
