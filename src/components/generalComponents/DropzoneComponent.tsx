import React from "react";

type Props = {
  isDragActive: boolean;
  getRootProps: any;
  getInputProps: any;
};

function DropzoneComponent({
  isDragActive,
  getInputProps,
  getRootProps,
}: Props) {
  return (
    <div
      className={`border border-grey p-2 rounded-md w-full justify-center items-center flex shadow-md hover:opacity-80 cursor-pointer`}
    >
      <div
        {...getRootProps()}
        className={`border border-grey border-dashed px-8 py-4 rounded-md w-full justify-center items-center flex flex-col ${
          isDragActive ? "bg-gray opacity-50" : "bg-white"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p className="text-center">Drag and drop some files here, or click to select files</p>
        )}
        <p>Only .png /.jpg/.webp accepted</p>
      </div>
    </div>
  );
}

export default DropzoneComponent;
