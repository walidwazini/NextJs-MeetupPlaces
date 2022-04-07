import React, { Fragment } from 'react'

import MeetupDetail from '../components/meetups/MeetupDetail'

const MeetupDetails = ({ }) => {
  const id = 'm1'
  const title = 'Title 1'
  const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
  const address = 'Some address 5, 12345 Some City'
  const description = 'This is a first meetup!'

  return (
    <Fragment>
      <MeetupDetail
        key={id}
        id={id}
        title={title}
        address={address}
        image={image}
        details={description}

      />
    </Fragment>
  )
}

export default MeetupDetails