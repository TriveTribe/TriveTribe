"use client";
import { CreateBadgeModel } from "@/models/badgeModel";
import React, { useState, useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SubmitButtonComponent from "../generalComponents/SubmitButtonComponent";
import FormHeaderComponent from "./FormHeaderComponent";
import FormInputContainer from "./FormInputContainer";
import DropzoneComponent from "../generalComponents/DropzoneComponent";
import { useDropzone } from "react-dropzone";

type Props = {
  formLabel: string;
  children?: React.ReactNode;
  setShowform?: React.Dispatch<React.SetStateAction<boolean>>;
};

function BadgeForm({ formLabel, children, setShowform }: Props) {
  const { register, handleSubmit } = useForm<CreateBadgeModel>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<CreateBadgeModel> = async (data) => {
    setIsLoading(true);
    const response = await fetch("/api/badges", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
        image: data.image,
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

const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFiles(acceptedFiles);
}, []);
const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
        "image/*": [".jpeg", ".png"],
    },
});


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 mx-auto p-8 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green z-10 w-[500px] max-h-[400px] overflow-auto shadow-lg"
    >
      <FormHeaderComponent formLabel={formLabel} setShowform={setShowform} />
      <input
        {...register("name")}
        placeholder="Header here..."
        type="text"
        className="rounded-lg px-4 py-2 shadow-lg"
      />
      <textarea
        {...register("description")}
        placeholder="Add Badge here..."
        className="rounded-lg px-4 py-2 h-2/3 shadow-lg min-h-[100px]"
      />
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
      <SubmitButtonComponent isLoading={isLoading} text="Submit" />
      {children}
    </form>
  );
}

export default BadgeForm;
