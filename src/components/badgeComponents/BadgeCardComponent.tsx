import { BadgeModel } from "@/models/badgeModel";
import Image from "next/image";
import Link from "next/link";

type Props = {
  badge: BadgeModel;
};

const BadgeCardComponent = ({ badge }: Props) => {
  const image = badge.images ? badge.images : "/imagePlaceholder.png";

  return (
    <Link
      className="flex flex-col rounded-lg p-4 space-y-2 bg-lightGreen"
      href={"/badges/${badges.id}"}
    >
      <Image
        src={image}
        alt={badge.name}
        width={200}
        height={200}
        className="w-[150px] h-[50px] rounded-lg"
      />
      <h1 className="text-lg font-semibold">{badge.name}</h1>
      <p className="text-gray">{badge.description}</p>
      <p className="text-gray">{badge.images}</p>
    </Link>
  );
};

export default BadgeCardComponent;
