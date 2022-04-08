import React, { Fragment } from 'react'
import { MongoClient, ObjectId } from 'mongodb'

import MeetupDetail from '../../components/meetups/MeetupDetail'

const databaseName = 'meetups'
const username = 'walid'
const userPassword = ''

const MeetupDetails = ({ meetupData }) => {
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
        title={meetupData.title}
        address={meetupData.address}
        image={meetupData.image}
        details={meetupData.description}

      />
    </Fragment>
  )
}

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(`mongodb+srv://${username}:${userPassword}@meetup-places.xjzy3.mongodb.net/${databaseName}?retryWrites=true&w=majority`)
  const db = client.db()
  const meetupsCollection = db.collection('collection-1')

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

  client.close()

  return {
    fallback: false,
    paths: meetups.map(meetup => (
      { params: { meetupId: meetup._id.toString() } }
    )),
  }
}

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId

  const client = await MongoClient.connect(`mongodb+srv://${username}:${userPassword}@meetup-places.xjzy3.mongodb.net/${databaseName}?retryWrites=true&w=majority`)
  const db = client.db()
  const meetupsCollection = db.collection('collection-1')

  // findOne --> find one single object
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId)
  })

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    }
  }
}

export default MeetupDetails