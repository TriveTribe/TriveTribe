import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type Props = {
  setDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  date: Dayjs | null;
};

const DatePickerComponent: React.FC<Props> = ({ date, setDate }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={date}
        onChange={(newValue) => setDate(newValue)}
        className="bg-white rounded-md"
      />
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
