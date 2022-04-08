import React, { Fragment } from 'react'

import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = () => {
  const id = 'm1'
  const title = 'Title 1'
  const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
  const address = 'Some address 5, 12345 Some City'
  const description = 'This is a first meetup!'

  return (
    <Fragment>
      <MeetupDetail
        // key={id}
        // id={id}
        title={title}
        address={address}
        image={image}
        details={description}

      />
    </Fragment>
  )
}

export const getStaticPaths = async () => {
  // export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        },
        params: {
          meetupId: 'm2'
        },
        params: {
          meetupId: 'm3'
        },
      }
    ]
  }
}

export const getStaticProps = async (context) => {
  // export async function getStaticProps(context) {
  const meetupId = context.params.meetupId

  console.log(context)

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: 'Title 1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'

      }
    }
  }
}

export default MeetupDetails