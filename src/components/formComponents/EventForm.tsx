"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButtonComponent from "../generalComponents/SubmitButtonComponent";
import FormHeaderComponent from "./FormHeaderComponent";
import { CreateEventFormModel } from "@/models/eventModel";
import FormInputContainer from "./FormInputContainer";
import { getDateTimeString } from "@/utils/functions/getDateTimeString";

type Props = {
  formLabel: string;
  children?: React.ReactNode;
  setShowform?: React.Dispatch<React.SetStateAction<boolean>>;
};

function EventForm({ formLabel, children, setShowform }: Props) {
  const { register, handleSubmit } = useForm<CreateEventFormModel>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<CreateEventFormModel> = async (data) => {
    setIsLoading(true);
    const response = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
        startDateTime: getDateTimeString(data.date, data.startTime),
        endDateTime: getDateTimeString(data.date, data.endTime),
        location: data.location,
        organizer_id: data.organizer_id,
        xpGiven: data.xpGiven,
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
      className="flex flex-col space-y-4 mx-auto p-8 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green z-10 w-[500px] h-auto overflow-auto shadow-lg"
    >
      <FormHeaderComponent formLabel={formLabel} setShowform={setShowform} />
      <FormInputContainer label="Name">
        <input
          {...register("name")}
          placeholder="Name goes here..."
          type="text"
          className="rounded-lg px-4 py-2 shadow-lg"
        />
      </FormInputContainer>
      <FormInputContainer label="Description">
        <textarea
          {...register("description")}
          placeholder="Add announcement here..."
          className="rounded-lg px-4 py-2 shadow-lg"
          rows={3}
        />
      </FormInputContainer>
      <div className="grid grid-cols-2 gap-4">
        <FormInputContainer label="Xp Given">
          <input
            {...register("xpGiven")}
            placeholder="Xp given goes here..."
            className="rounded-lg px-4 py-2 shadow-lg"
            type="number"
          />
        </FormInputContainer>
        <FormInputContainer label="Organizer">
          <input
            {...register("organizer_id")}
            placeholder="Select organizer..."
            className="rounded-lg px-4 py-2 shadow-lg"
            type="text"
          />
        </FormInputContainer>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormInputContainer label="Date">
          <input
            {...register("date")}
            placeholder="Xp given goes here..."
            className="rounded-lg px-4 py-2 shadow-lg"
            type="number"
          />
        </FormInputContainer>
        <FormInputContainer label="Badges">
          <input
            {...register("organizer_id")}
            placeholder="Select organizer..."
            className="rounded-lg px-4 py-2 shadow-lg"
            type="text"
          />
        </FormInputContainer>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormInputContainer label="Start Time">
          <input
            {...register("startTime")}
            placeholder="Xp given goes here..."
            className="rounded-lg px-4 py-2 shadow-lg"
            type="number"
          />
        </FormInputContainer>
        <FormInputContainer label="End Time">
          <input
            {...register("endTime")}
            placeholder="Select organizer..."
            className="rounded-lg px-4 py-2 shadow-lg"
            type="text"
          />
        </FormInputContainer>
      </div>
      <FormInputContainer label="Location">
        <input
          {...register("location")}
          placeholder="Location goes here..."
          type="text"
          className="rounded-lg px-4 py-2 shadow-lg"
        />
      </FormInputContainer>
      <SubmitButtonComponent text="Submit" isLoading={isLoading} />
      {children}
    </form>
  );
}

export default EventForm;
