// domain.com/new-meetup

import { Fragment } from "react"
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetUp = () => {

  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData)
  }

  return (
    <Fragment>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  )
}

export default NewMeetUp