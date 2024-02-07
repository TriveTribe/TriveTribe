import EventHeaderComponent from '@/components/eventComponents/EventHeaderComponent'
import React from 'react'

type Props = {}

const EventPage = (props: Props) => {
  return (
    <div className='flex flex-col h-full w-full'>
      <EventHeaderComponent />
    </div>
  )
}

export default EventPage