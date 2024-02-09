import BadgeCardComponent from '@/components/badgeComponents/BadgeCardComponent';
//import { BadgeModel } from '@/models/badgeModel'; // Make sure this path is correct
import HeaderComponent from '@/components/generalComponents/HeaderComponent';
import { fetchBadges } from '@/utils/pocketbase/badges/fetchBadges';
//import Image from 'next/image';
//import React from 'react';


type Props = {};

const BadgesPage = async (props: Props) => {

  const badges = await fetchBadges(50, 1);

  return (
    <div className='flex flex-col'>
      <HeaderComponent title="Badges"/>
      <div className='flex flex-wrap gap-8 px-16 py-8'>
        {
          badges.map((badge, index) => {
            return (
              <BadgeCardComponent key={index} badge={badge} />
            )
          })
        }
      </div>
    </div>
  )
}

export default BadgesPage
