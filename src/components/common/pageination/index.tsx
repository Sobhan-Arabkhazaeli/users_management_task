import { Pagination, Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { handleUsersPage } from "../../../redux/slices/users-params";
import { FC } from "react";

interface IProps {
  page: number | undefined;
  totalPages: number | undefined;
}

const PaginationSection: FC<IProps> = ({ page, totalPages }) => {
//   console.log(totalPages);
  const Dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    Dispatch(handleUsersPage(value));
  };
  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={totalPages} page={page || 1} onChange={handleChange} />
    </Stack>
  );
};

export default PaginationSection;
