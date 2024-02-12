import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface UsersPaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function UsersPagination({
  page,
  setPage,
}: UsersPaginationProps) {
  //
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2} sx={{ my: 4 }}>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
