import EventCardComponent from "@/components/eventComponents/EventCardComponent";
import CarouselComponent from "@/components/generalComponents/CarouselComponent";
import HeaderComponent from "@/components/generalComponents/HeaderComponent";
import { fetchAnnouncements } from "@/utils/pocketbase/announcements/fetchAnnouncements";
import ToggleFormComponent from "@/components/generalComponents/ToggleFormComponent";
import { fetchEvents } from "@/utils/pocketbase/events/fetchEvents";
import AnnouncementForm from "@/components/formComponents/AnnouncementForm";
import { cookies } from "next/headers";

export default async function Home() {
  // all the fetch requests here
  const events = await fetchEvents(3, 1);
  const titles = await fetchAnnouncements(3, 1).then((announcements) => {
    return announcements.map((announcement) => {
      return announcement.description;
    });
  });
  const img_links = ["", "", ""];
  console.log(cookies());

  return (
    <main className="flex flex-col pl-5 w-full">
      <div className="flex items-center">
        <HeaderComponent title="Annoucements" />
        <ToggleFormComponent title="Add">
          <AnnouncementForm formLabel="Add Announcement" />
        </ToggleFormComponent>
      </div>
      <CarouselComponent imgLinks={img_links} titles={titles} />
      <HeaderComponent title="Upcoming Events" />
      <div className="flex flex-wrap gap-8 px-16">
        {events.map((event, index) => {
          return <EventCardComponent key={index} event={event} />;
        })}
      </div>
    </main>
  );
}
