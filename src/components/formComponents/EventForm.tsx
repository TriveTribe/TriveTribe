"use client";
import React, { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButtonComponent from "../generalComponents/SubmitButtonComponent";
import FormHeaderComponent from "./FormHeaderComponent";
import { CreateEventFormModel } from "@/models/eventModel";
import FormInputContainer from "./FormInputContainer";
import { getDateTimeString } from "@/utils/functions/getDateTimeString";
import { useDropzone } from "react-dropzone";
import DropzoneComponent from "../generalComponents/DropzoneComponent";
import DatePickerComponent from "../generalComponents/DatePickerComponent";
import dayjs, { Dayjs } from "dayjs";
import TimePickerComponent from "../generalComponents/TimePickerComponent";
import { BadgeModel } from "@/models/badgeModel";
import { DropdownComponent } from "../generalComponents/DropdownComponent";
import { UserModel } from "@/models/userModel";
import MultiDropdownComponent from "../generalComponents/MultiDropdownComponent";

type Props = {
  formLabel: string;
  children?: React.ReactNode;
  setShowform?: React.Dispatch<React.SetStateAction<boolean>>;
  badges: BadgeModel[];
  organizers: UserModel[];
};

function EventForm({
  formLabel,
  children,
  setShowform,
  badges,
  organizers,
}: Props) {
  const { register, handleSubmit } = useForm<CreateEventFormModel>();
  const [isLoading, setIsLoading] = useState(false);

  // Selected data
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [date, setDate] = useState<Dayjs | null>(dayjs("2024-04-17"));
  const [startTime, setStartTime] = useState<Dayjs | null>(
    dayjs("2024-04-17T10:00:00"),
  );
  const [endTime, setEndTime] = useState<Dayjs | null>(
    dayjs("2024-04-17T10:00:00"),
  );
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  const [selectedOrganizer, setSelectedOrganizer] = useState<string>(
    organizers[0].id ?? "",
  );

  // Dropzone props
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  });

  // Form submit
  const onSubmit: SubmitHandler<CreateEventFormModel> = async (data) => {
    setIsLoading(true);

    const formData = new FormData();
    uploadedFiles.forEach((file) => {
      formData.append("Images", file);
    });
    formData.append("name", data.name);
    formData.append("description", data.description);
    if (date && startTime)
      formData.append(
        "startDateTime",
        getDateTimeString(date.toISOString(), startTime.toISOString()),
      );
    if (date && endTime)
      formData.append(
        "endDateTime",
        getDateTimeString(date.toISOString(), endTime.toISOString()),
      );
    formData.append("location", data.location);
    formData.append("organizer", selectedOrganizer);
    formData.append("xpGiven", data.xpGiven.toString());
    badges
      .filter((badge) => selectedBadges.includes(badge.name))
      .forEach((badge) => {
        formData.append("badges", badge.id ?? "");
      });

    const response = await fetch("/api/events", {
      method: "POST",
      body: formData,
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
      className="flex flex-col space-y-4 m-auto p-8 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green z-10 w-[500px] max-h-[700px] overflow-auto shadow-lg"
    >
      <FormHeaderComponent formLabel={formLabel} setShowform={setShowform} />
      <FormInputContainer label="Name">
        <input
          {...register("name")}
          placeholder="Name goes here..."
          type="text"
          className="h-14 rounded-md px-4 py-2 shadow-lg"
        />
      </FormInputContainer>
      <FormInputContainer label="Description">
        <textarea
          {...register("description")}
          placeholder="Add announcement here..."
          className="rounded-md px-4 py-2 shadow-lg"
          rows={3}
        />
      </FormInputContainer>
      <FormInputContainer label="Image">
        <DropzoneComponent
          isDragActive={isDragActive}
          getRootProps={getRootProps}
          getInputProps={getInputProps}
        />
        {uploadedFiles.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {uploadedFiles.map((file, index) => {
              return (
                <label key={index} className="flex flex-col gap-2 text-white">
                  {file.name}
                </label>
              );
            })}
          </div>
        )}
      </FormInputContainer>
      <div className="grid grid-cols-2 gap-4">
        <FormInputContainer label="Xp Given">
          <input
            {...register("xpGiven")}
            placeholder="Xp given goes here..."
            className="h-14 rounded-md px-4 py-2 shadow-lg"
            type="number"
          />
        </FormInputContainer>
        <FormInputContainer label="Organizer">
          <DropdownComponent
            dropdownModels={organizers.map((organizer) => {
              return {
                label: organizer.name ?? "",
                value: organizer.id ?? "",
              };
            })}
            value={selectedOrganizer}
            setValue={setSelectedOrganizer}
          />
        </FormInputContainer>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormInputContainer label="Date">
          <DatePickerComponent date={date} setDate={setDate} />
        </FormInputContainer>
        <FormInputContainer label="Badges">
          <MultiDropdownComponent
            options={badges.map((badge) => badge.name)}
            selected={selectedBadges}
            setSelected={setSelectedBadges}
          />
        </FormInputContainer>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormInputContainer label="Start Time">
          <TimePickerComponent time={startTime} setTime={setStartTime} />
        </FormInputContainer>
        <FormInputContainer label="End Time">
          <TimePickerComponent time={endTime} setTime={setEndTime} />
        </FormInputContainer>
      </div>
      <FormInputContainer label="Location">
        <input
          {...register("location")}
          placeholder="Location goes here..."
          type="text"
          className="h-14 rounded-md px-4 py-2 shadow-lg"
        />
      </FormInputContainer>
      <SubmitButtonComponent text="Submit" isLoading={isLoading} />
      {children}
    </form>
  );
}

export default EventForm;
