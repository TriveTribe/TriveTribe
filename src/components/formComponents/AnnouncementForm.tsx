"use client";
import { CreateAnnouncementModel } from "@/models/announcementModel";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type Props = {
  formLabel: string;
  isLoading?: boolean;
  children?: React.ReactNode;
  setShowform?: React.Dispatch<React.SetStateAction<boolean>>;
};

function AnnoucementForm({
  formLabel,
  isLoading,
  children,
  setShowform,
}: Props) {
  const { register, handleSubmit } = useForm<CreateAnnouncementModel>();

  const onSubmit: SubmitHandler<CreateAnnouncementModel> = async (data) => {
    const response = await fetch("/api/announcements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        header: data.header,
        description: data.description,
      }),
    });
    if (response) {
      response.json().then((data) => console.log(data));
    }
    if (setShowform) {
      setShowform(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 mx-auto p-8 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green z-10 w-[500px] h-[400px] shadow-lg"
    >
      <div className="flex w-full justify-between">
        <h2 className="text-lg text-white">{formLabel}</h2>
        <button
          onClick={() => {
            setShowform && setShowform(false);
          }}
          className="hover:opacity-90 transition-all"
        >
          <CloseRoundedIcon className="text-white" />
        </button>
      </div>
      <input
        {...register("header")}
        placeholder="Header here..."
        type="text"
        className="rounded-lg px-4 py-2 shadow-lg"
      />
      <textarea
        {...register("description")}
        placeholder="Add announcement here..."
        className="rounded-lg px-4 py-2 h-2/3 shadow-lg"
      />
      <button
        type="submit"
        className="p-2 rounded-lg bg-lightGreen hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
        disabled={isLoading}
      >
        Submit
      </button>
      {children}
    </form>
  );
}

export default AnnoucementForm;
