import React, { Fragment } from 'react'

import classes from './MeetupDetail.module.css'

const MeetupDetail = ({ id, title, address, image, details }) => {
  return (
    <section className={classes.detail}>
      <img
        src={image}
        alt={title}
      />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{details}</p>
    </section>
  )
}

export default MeetupDetail