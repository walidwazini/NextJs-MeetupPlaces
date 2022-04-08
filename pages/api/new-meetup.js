// api/new-meetup
import { MongoClient } from 'mongodb'

const databaseName = 'meetups'
const username = 'walid'
const userPassword = ''

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body

    // const { title, image, address, description } = data

    // Store into database
    const client = await MongoClient.connect(`mongodb+srv://${username}:${userPassword}@meetup-places.xjzy3.mongodb.net/${databaseName}?retryWrites=true&w=majority`)
    const db = client.db()

    const meetupsCollection = db.collection('collection-1')

    const result = await meetupsCollection.insertOne(data)

    console.log(result)

    client.close()

    res.status(201).json({
      message: 'Meetup inserted'
    })
  }
}

export default handler 