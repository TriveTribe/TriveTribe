"use client";
import { CreateAnnouncementModel } from "@/models/announcementModel";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButtonComponent from "../generalComponents/SubmitButtonComponent";
import FormHeaderComponent from "./FormHeaderComponent";

type Props = {
  formLabel: string;
  children?: React.ReactNode;
  setShowform?: React.Dispatch<React.SetStateAction<boolean>>;
};

function AnnoucementForm({ formLabel, children, setShowform }: Props) {
  const { register, handleSubmit } = useForm<CreateAnnouncementModel>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<CreateAnnouncementModel> = async (data) => {
    setIsLoading(true);
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
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 mx-auto p-8 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green z-10 w-[500px] h-[400px] shadow-lg"
    >
      <FormHeaderComponent formLabel={formLabel} setShowform={setShowform} />
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
      <SubmitButtonComponent isLoading={isLoading} text="Submit"/>
      {children}
    </form>
  );
}

export default AnnoucementForm;
