"use client";

import React, { useState } from "react";
import AnnouncementForm from "@/components/formComponents/AnnouncementForm";
import { createAnnouncement } from "@/utils/pocketbase/announcements/createAnnouncements";
import { SubmitHandler } from "react-hook-form";
import { CreateAnnouncementModel } from "@/models/announcementModel";

type Props = {
  title: string;
  type: string;
};

const HeaderComponent = (props: Props) => {
    const [showForm, setShowForm] = useState(false);
    const onSubmit: SubmitHandler<CreateAnnouncementModel> = async (data) => {
        
        const response = await createAnnouncement(data);
        if (response) {
            console.log("Announcement created successfully");
        }
        setShowForm(!showForm);
    }

    return (
        <div>
            <button onClick={() => setShowForm(!showForm)} className="bg-[#31B529] text-white rounded-xl w-[100px] h-[50px] mx-10">
                {props.title}
            </button>

            {/* to add overlay */
                showForm && <div className="fixed inset-0 bg-white bg-opacity-50"></div>
            }

            {showForm && props.type === "annoucement" && <AnnouncementForm isLoading={false} onSubmit={onSubmit} formLabel="Annoucement Form"/>}
            
 
        </div>
    );
};

export default HeaderComponent;