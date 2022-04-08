import { Fragment, useEffect, useState } from 'react';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
];

const databaseName = 'meetups'
const username = 'walid'
const userPassword = ''

const HomePage = ({ meetups }) => {

  return (
    <Fragment>
      <h1>HomePage</h1>
      <MeetupList meetups={meetups} />
    </Fragment>
  )
}

// export const getServerSideProps = async (context) => {
//   const req = context.req
//   const res = context.res

//   // fetch data from API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//   } 
// }

export const getStaticProps = async () => {
  const client = await MongoClient.connect(`mongodb+srv://${username}:${userPassword}@meetup-places.xjzy3.mongodb.net/${databaseName}?retryWrites=true&w=majority`)
  const db = client.db()

  const meetupsCollection = db.collection('collection-1')

  const meetups = await meetupsCollection.find().toArray()

  console.log('hello')

  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1
  }
}

export default HomePage


