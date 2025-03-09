import { Avatar, Box, Skeleton, Typography } from "@mui/material";

const UserCard_Skeleton = () => {
  return (
    <div className="w-56 h-64 p-6">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ margin: 1 }}>
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Skeleton width="100%">
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>
      <Skeleton variant="rectangular" width="100%">
        <div style={{ paddingTop: "57%" }} />
      </Skeleton>
    </div>
  );
};

export default UserCard_Skeleton;
