import EventCardComponent from "@/components/eventComponents/EventCardComponent";
import HeaderComponent from "@/components/generalComponents/HeaderComponent";
import TextComponent from "@/components/generalComponents/TextComponent";
import { EventModel } from "@/models/eventModel";


export default async function Home() {

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
    }
  ]

  return (
    <main className="flex flex-col pl-5 w-full">
      <HeaderComponent title="Annoucements" />
      <TextComponent msg="This is an example of the annoucement" />
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
    </main>
  );
}
