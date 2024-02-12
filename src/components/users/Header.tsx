import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { HeaderProps } from "../../types";
import { TextField } from "@mui/material";

export default function Header({
  setGender,
  gender,
  users,
  setFilteredUsers,
  setKeyword,
  keyword,
}: HeaderProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
    localStorage.setItem("gender", event.target.value);
  };
  //   Search a user
  function searchUsers(keyword: string) {
    const results = [];
    const pattern = new RegExp(keyword, "i");
    for (const user of users) {
      if (
        pattern.test(user.name.first) ||
        pattern.test(user.name.last) ||
        pattern.test(user.email) ||
        pattern.test(user.cell) ||
        pattern.test(user.dob.date)
      ) {
        results.push(user);
      }
    }
    setFilteredUsers(results);
  }

  return (
    <Box sx={{ minWidth: 120 }} className="flex flex-col md:flex-row  gap-4">
      <FormControl>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={handleChange}
          sx={{ width: "220px" }}
        >
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="outlined-controlled"
        label="Search"
        value={keyword}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          searchUsers(event.target.value);
          setKeyword(event.target.value);
        }}
        sx={{ width: "220px" }}
      />
    </Box>
  );
}
