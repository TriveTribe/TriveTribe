import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import React from "react";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type Props = {
  setTime: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  time: Dayjs | null;
};

const TimePickerComponent: React.FC<Props> = ({ time, setTime }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        value={time}
        onChange={(newValue) => setTime(newValue)}
        className="bg-white rounded-md"
      />
    </LocalizationProvider>
  );
};

export default TimePickerComponent;
