import EventCardComponent from "@/components/eventComponents/EventCardComponent";
import HeaderComponent from "@/components/generalComponents/HeaderComponent";
import TextComponent from "@/components/generalComponents/TextComponent";
import { createAnnouncement } from "@/utils/pocketbase/announcements/createAnnouncements";
import { fetchBadgesWithId } from "@/utils/pocketbase/badges/fetchBadgesWithId";
import { fetchEvents } from "@/utils/pocketbase/events/fetchEvents";
import { fetchEventsWithId } from "@/utils/pocketbase/events/fetchEventsWithId";

export default async function Home() {
  const DUMMY_EVENTS = await fetchEvents(3, 1);

  return (
    <main className="flex flex-col pl-5 w-full">
      <HeaderComponent title="Annoucements" />
      <TextComponent msg="This is an example of the annoucement" />
      <HeaderComponent title="Upcoming Events" />
      <div className="flex flex-wrap gap-8 px-16">
        {DUMMY_EVENTS.map((event, index) => {
          return <EventCardComponent key={index} event={event} />;
        })}
      </div>
    </main>
  );
}
