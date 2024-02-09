import { CircularProgress } from "@mui/material";
import React from "react";

type Props = {
  isLoading: boolean;
  text?: string;
};

const SubmitButtonComponent: React.FC<Props> = (props: Props) => {
  return (
    <button
      type="submit"
      className="flex justify-center items-center space-x-4 px-4 py-2 rounded-lg bg-lightGreen hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
      disabled={props.isLoading}
    >
      <p>{props.text}</p>
      <CircularProgress size={20} hidden={!props.isLoading} />
    </button>
  );
};

export default SubmitButtonComponent;
