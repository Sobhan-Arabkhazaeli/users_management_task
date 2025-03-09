import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSortBy,
  TUserParamsSelector,
} from "../../../redux/slices/users-params";
import { IUsersParams } from "../../../core/types/common/users.params.interface";

const SortSelect = () => {
  const sortByParams = useSelector<TUserParamsSelector, IUsersParams>(
    (state) => state.UsersParams
  );
  const Dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    Dispatch(handleSortBy(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">SortBy</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortByParams.sortBy}
          label="SortBy"
          onChange={handleChange}
        >
          <MenuItem value={"name"}>name </MenuItem>
          <MenuItem value={"createdAt"}>createdAt </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelect;
