import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  handleLimit,
  TUserParamsSelector,
} from "../../../redux/slices/users-params";
import { IUsersParams } from "../../../core/types/common/users.params.interface";

const RowsOfPageSelect = () => {
  const sortByParams = useSelector<TUserParamsSelector, IUsersParams>(
    (state) => state.UsersParams
  );
  const Dispatch = useDispatch();

  // Sending rowsOf page to the api
  const handleChange = (event: SelectChangeEvent) => {
    Dispatch(handleLimit(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">limit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortByParams.limit}
          label="10"
          onChange={handleChange}
        >
          <MenuItem value={10}>10 </MenuItem>
          <MenuItem value={15}>15 </MenuItem>
          <MenuItem value={20}>20 </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default RowsOfPageSelect;
