import { CreateAnnouncementModel } from "@/models/announcementModel";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  formLabel: string;
  isLoading?: boolean;
  onSubmit: SubmitHandler<CreateAnnouncementModel>;
  children?: React.ReactNode;
};

function AnnoucementForm({ formLabel, isLoading, onSubmit, children }: Props) {
  const { register, handleSubmit } = useForm<CreateAnnouncementModel>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 mx-auto border p-16 rounded-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#31B529] z-10"
    >
      <h2 className="text-lg text-white">{formLabel}</h2>
      <input
        {...register("header")}
        placeholder="Header here..."
        type="text"
        className="border rounded-md px-4 py-2"
      />
      <input
        {...register("description")}
        placeholder="Add announcement here..."
        type="annoucement"
        className="border rounded-md px-4 py-2"
      />
      <button
        type="submit"
        className="border padding-4 rounded-md"
        disabled={isLoading}
      >
        Submit
      </button>
      {children}
    </form>
  );
}

export default AnnoucementForm;
