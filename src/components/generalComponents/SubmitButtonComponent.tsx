import { CircularProgress } from "@mui/material";
import React from "react";

type Props = {
  isLoading: boolean;
};

const SubmitButtonComponent: React.FC<Props> = ({ isLoading }) => {
  return (
    <button
      type="submit"
      className="flex justify-center items-center space-x-4 p-2 rounded-lg bg-lightGreen hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
      disabled={isLoading}
    >
      <p>Submit</p>
      <CircularProgress size={20} hidden={!isLoading} />
    </button>
  );
};

export default SubmitButtonComponent;
