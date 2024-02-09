import BadgeCardComponent from "@/components/badgeComponents/BadgeCardComponent";
import BadgeForm from "@/components/formComponents/BadgeForm";
//import { BadgeModel } from '@/models/badgeModel'; // Make sure this path is correct
import HeaderComponent from "@/components/generalComponents/HeaderComponent";
import ToggleFormComponent from "@/components/generalComponents/ToggleFormComponent";
import { fetchBadges } from "@/utils/pocketbase/badges/fetchBadges";
//import Image from 'next/image';
//import React from 'react';

type Props = {};

const BadgesPage = async (props: Props) => {
  const badges = await fetchBadges(50, 1);

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex items-center">
        <HeaderComponent title="Badges" />
        <ToggleFormComponent title="Add">
          <BadgeForm formLabel="Add Announcement" />
        </ToggleFormComponent>
      </div>
      <div className="flex flex-wrap gap-8 px-16 py-8">
        {badges.map((badge, index) => {
          return <BadgeCardComponent key={index} badge={badge} />;
        })}
      </div>
    </div>
  );
};

export default BadgesPage;
