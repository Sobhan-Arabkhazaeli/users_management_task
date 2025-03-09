import { Avatar, Box, Skeleton, Typography } from "@mui/material";

const UserCard_Skeleton = () => {
  return (
    <Box
      sx={{
        width: 224,
        height: 256,
        p: 3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ m: 1 }}>
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
        <Box sx={{ pt: "57%" }} />
      </Skeleton>
    </Box>
  );
};

export default UserCard_Skeleton;
