// domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import Layout from "../../components/layout/Layout"

const NewMeetUp = () => {

  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData)
  }

  return (
    <Layout>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Layout>
  )
}

export default NewMeetUp