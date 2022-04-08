import { MongoClient } from 'mongodb';

const databaseName = 'meetups'
const username = 'walid'
const userPassword = 'happy468'

const client = await MongoClient.connect(`mongodb+srv://${username}:${userPassword}@meetup-places.xjzy3.mongodb.net/${databaseName}?retryWrites=true&w=majority`)
const db = client.db()

const meetupsCollection = db.collection('collection-1')
const meetups = await meetupsCollection.find().toArray()

export default meetups