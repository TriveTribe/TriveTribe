import { EventModel } from "@/models/eventModel";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getDateTime } from "@/utils/functions/getDateTime";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import StarBorderPurple500RoundedIcon from "@mui/icons-material/StarBorderPurple500Rounded";

type Props = {
  event: EventModel;
};

const EventCardComponent = ({ event }: Props) => {
  const image = event.images ? event.images[0] : "/imagePlaceholder.png";

  return (
    <Link
      className="flex flex-col rounded-lg p-4 space-y-2 bg-lightGreen"
      href={"/events"}
    >
      <Image
        src={image}
        alt={event.name}
        width={200}
        height={200}
        className="w-[200px] h-[100px] rounded-lg"
      />
      <h1 className="text-lg font-semibold">{event.name}</h1>
      <p className="text-gray">{event.description}</p>
      <p className="text-gray">
        {getDateTime(event.startDateTime, event.endDateTime)}
      </p>
      <p className="text-gray">{event.location}</p>
      <div className="flex justify-evenly">
        <div className="flex w-[50%]">
          <GroupOutlinedIcon />
          <p className=" text-gray">{event.users ? event.users.length : 0}</p>
        </div>
        <p>|</p>
        <div className="flex w-[50%]">
          <StarBorderPurple500RoundedIcon />
          <p className="text-gray">{event.xpGiven}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCardComponent;
