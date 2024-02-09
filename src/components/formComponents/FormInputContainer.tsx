import React from "react";

type Props = {
  label: string;
  children?: React.ReactNode;
};

const FormInputContainer: React.FC<Props> = ({ label, children }) => {
  return (
    <div className="flex flex-col">
      <label className="text-white">{label}</label>
      {children}
    </div>
  );
};

export default FormInputContainer;
