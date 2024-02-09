"use client";
import { CreateAnnouncementModel } from "@/models/announcementModel";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButtonComponent from "@/components/generalComponents/SubmitButtonComponent";
import FormHeaderComponent from "@/components/formComponents/FormHeaderComponent";
import ProfileComponent from "@/components/loginComponents/ProfileComponent";
import FormInputContainer from "@/components/formComponents/FormInputContainer";

type Props = {
  formLabel: string;
  children?: React.ReactNode;
  setShowform?: React.Dispatch<React.SetStateAction<boolean>>;
};

function LoginForm({ formLabel, children, setShowform }: Props) {
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
          className="flex flex-col gap-4 mx-auto p-8 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-lightGreen border-2 z-10 w-[600px] h-[500px] shadow-lg"
      >
        <ProfileComponent name={"Participant"}></ProfileComponent>
        {/*<FormHeaderComponent formLabel={formLabel} setShowform={setShowform} />*/}
        <div className="flex justify-center">
          <FormInputContainer label={"Email"}></FormInputContainer>
        </div>
        <input
            {...register("header")}
            placeholder="Header here..."
            type="text"
            className="rounded-lg px-4 py-2 shadow-lg"
        />
        <div className="flex justify-center">
          <FormInputContainer label={"Password"}></FormInputContainer>
        </div>
        <input
            {...register("description")}
            placeholder="Add announcement here..."
            className="rounded-lg px-4 py-2 shadow-lg"
        />
        <div className="flex mx-2 justify-center mt-10">
          <SubmitButtonComponent text="Login" isLoading={isLoading}/>
        </div>
        {children}
      </form>
  );
}

export default LoginForm;
