import EventCardComponent from "@/components/eventComponents/EventCardComponent";
import HeaderComponent from "@/components/generalComponents/HeaderComponent";
import { fetchEvents } from "@/utils/pocketbase/events/fetchEvents";
import React from "react";

type Props = {};

const Page = async (props: Props) => {
  const events = await fetchEvents(50, 1);

  return (
    <div className="flex flex-col">
      <HeaderComponent title="History" />
      <div className="flex flex-wrap gap-8 px-16 py-8">
        {events.map((event, index) => {
          return <EventCardComponent key={index} event={event} />;
        })}
      </div>
    </div>
  );
};

export default Page;
