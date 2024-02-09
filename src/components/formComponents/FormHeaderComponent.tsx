import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type Props = {
  formLabel: string;
  setShowform?: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormHeaderComponent: React.FC<Props> = ({ formLabel, setShowform }) => {
  return (
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
  );
};

export default FormHeaderComponent;
