"use client";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DropdownModel } from "@/models/generalModel";

type Props = {
  dropdownModels: DropdownModel[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const DropdownComponent: React.FC<Props> = ({ dropdownModels }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <Select
        id="input-selector"
        value={value}
        defaultValue={dropdownModels[0].value}
        onChange={handleChange}
        className="bg-white rounded-md"
      >
        {dropdownModels.map((dropdownModel, index) => (
          <MenuItem key={index} value={dropdownModel.value}>
            {dropdownModel.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
