import EventCardComponent from '@/components/eventComponents/EventCardComponent';
import EventHeaderComponent from '@/components/eventComponents/EventHeaderComponent'
import HeaderComponent from '@/components/eventComponents/HeaderComponent';
import { EventModel } from '@/models/eventModel';
import { fetchEvents } from '@/utils/pocketbase/events/fetchEvents';
import React from 'react'

type Props = {}

const DUMMY_EVENTS: EventModel[] = [
  {
    name: "event1",
    description: "this is an event",
    startDateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    endDateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    location: "Singapore",
    organizer: "cn1blgyikljtwhl",
    xpGiven: 1000,
  },
  {
    name: "event1",
    description: "this is an event",
    startDateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    endDateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    location: "Singapore",
    organizer: "cn1blgyikljtwhl",
    xpGiven: 1000,
  },
  {
    name: "event1",
    description: "this is an event",
    startDateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    endDateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    location: "Singapore",
    organizer: "cn1blgyikljtwhl",
    xpGiven: 1000,
  },
  {
    name: "event1",
    description: "this is an event",
    startDateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    endDateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    location: "Singapore",
    organizer: "cn1blgyikljtwhl",
    xpGiven: 1000,
  },
  {
    name: "event1",
    description: "this is an event",
    startDateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    endDateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    location: "Singapore",
    organizer: "cn1blgyikljtwhl",
    xpGiven: 1000,
  },
  {
    name: "event1",
    description: "this is an event",
    startDateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    endDateTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    location: "Singapore",
    organizer: "cn1blgyikljtwhl",
    xpGiven: 1000,
  }
]

const EventPage = async (props: Props) => {

  return (
    <div className='flex flex-col'>
      <HeaderComponent title="Upcoming Events" />
      <div className='flex flex-wrap gap-8 px-16 py-8'>
        {
          DUMMY_EVENTS.map((event, index) => {
            return (
              <EventCardComponent key={index} event={event} />
            )
          })
        }
      </div>
    </div>
  )
}

export default EventPage