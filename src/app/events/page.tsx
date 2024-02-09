import EventCardComponent from "@/components/eventComponents/EventCardComponent";
import { fetchEvents } from "@/utils/pocketbase/events/fetchEvents";
import React from "react";
import HeaderComponent from "@/components/generalComponents/HeaderComponent";
import ToggleFormComponent from "@/components/generalComponents/ToggleFormComponent";
import EventForm from "@/components/formComponents/EventForm";
import { fetchBadges } from "@/utils/pocketbase/badges/fetchBadges";
import { fetchUsers } from "@/utils/pocketbase/auth/fetchUsers";
import { fetchUserWithRole } from "@/utils/pocketbase/auth/fetchUserWithRole";

type Props = {};

const EventPage = async (props: Props) => {
  const events = await fetchEvents(50, 1);
  const badges = await fetchBadges(50, 1);
  const users = await fetchUserWithRole(["admin", "volunteer"]);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex items-center">
        <HeaderComponent title="Upcoming Events" />
        <ToggleFormComponent title="Add">
          <EventForm formLabel="Add Event" badges={badges} organizers={users} />
        </ToggleFormComponent>
      </div>
      <div className="flex flex-wrap gap-8 px-16 py-8">
        {events.map((event, index) => {
          return <EventCardComponent key={index} event={event} />;
        })}
      </div>
    </div>
  );
};

export default EventPage;
