import React from 'react'

const questionsAnswers = [
  {
    q: 'When is the RSVP deadline?',
    a: '20th April 2018'
  },
  {
    q: 'Can I bring a date?',
    a: 'Sure'
  },
  {
    q: 'What time should I arrive?',
    a: '4.10pm'
  },
  {
    q: 'Whom should I call with questions?',
    a: (
      <div>
        <p>
          Bogusia: <a href="tel:+447393999734">+44 7393 999734</a>
        </p>
        <p>
          Kamil: <a href="tel:+447472035403">+44 7472 035403</a>
        </p>
      </div>
    )
  },
  {
    q: 'Where should I park?',
    a: (
      <span>
        <p>
          For ceremony please park on
          <a href="https://goo.gl/maps/jtu948pnGou" target="blank">
            {' '}
            Doroty Street
          </a>
        </p>
        <p>
          For reception please use
          <a href="https://goo.gl/maps/2NpXg3X9dpL2" target="blank">
            {' '}
            Łódź Art Center's car park
          </a>
        </p>
      </span>
    )
  },
  {
    q: 'Will I have to pay for parking?',
    a: 'Both parkings are free, including parking on the street outside Łódź Art Center'
  },
  {
    q: 'Is there transportation being provided between registery office and reception?',
    a: (
      <span>
        <p>
          No, if you don't have your own transport you can either take a taxi, tram nr 6 or 11B from
          Piotrkowska/pl. Katedralny to Piotrkowska/pl. Niepodległości stop or walk.
        </p>
        <p>In both cases, the journey should take 15-20 minutes</p>
      </span>
    )
  },
  {
    q: 'What should/could I do between the ceremony and the reception?',
    a:
      'The reception starts straight after the ceremony. You might need around 15 minutes to get to the reception place'
  },
  {
    q: 'Is the wedding indoors or outdoors?',
    a: 'Indoors'
  },
  {
    q: 'Will food be served?',
    a: `Yes, we hope you'll enjoy it!`
  },
  {
    q: 'What if I have a dietary restriction?',
    a: 'Let us know if you have any dietary restrictions'
  },
  {
    q: 'How can I help the couple have the best time during their wedding day?',
    a: 'Smile, talk, dance, have a good time 😁'
  }
]

const QandA = props => (
  <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
    <div
      style={{
        marginBottom: '7px',
        paddingLeft: '30px',
        position: 'relative',
        lineHeight: '24px',
        letterSpacing: '-0.2px'
      }}
    >
      <strong style={{ position: 'absolute', left: 0 }}>Q:</strong> {props.q}
    </div>
    <div
      style={{ paddingLeft: '30px', wordWrap: 'break-word', marginTop: '5px', color: '#606060' }}
    >
      {props.a}
    </div>
  </div>
)

const FAQ = () => (
  <section className="middle-section" id="qa">
    <h3 className="subtitle is-size-5 has-text-centered">Q & A</h3>
    <p className="has-text-centered">
      For all our friends and family who have lots of questions, please check out our FAQ first!
    </p>
    <div style={{ marginTop: '3rem' }}>
      {questionsAnswers.map((el, i) => <QandA {...el} key={i} />)}
    </div>
  </section>
)

export default FAQ
