import { Pagination, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface IProps {
  page: number | undefined;
  totalPages: number | undefined;
  handlePageChange : (event: React.ChangeEvent<unknown>, value: number) => void
}

const PaginationSection: FC<IProps> = ({ page, totalPages , handlePageChange }) => {


  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={totalPages} page={page || 1} onChange={handlePageChange} />
    </Stack>
  );
};

export default PaginationSection;
