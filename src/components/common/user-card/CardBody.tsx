import { FC } from "react";
import { TUserDetails } from "../../../core/types/common/user.type";
import { Box, Typography, Chip } from "@mui/material";

// types
type idType = TUserDetails["id"];
type isFavoriteType = TUserDetails["isFavorite"];
type nameType = string | undefined;
type createdAtType = TUserDetails["createdAt"];

interface IProps {
  id: idType;
  isFavorite: isFavoriteType;
  name: nameType;
  createdAt: createdAtType;
}

const CardBody: FC<IProps> = ({ name, createdAt }) => {
  // Extract only the date portion from the createdAt string.
  const date = createdAt?.split("T");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mx: "auto",
        textAlign: "center",
        color: "#150a4f",
        mt: "24px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          fontSize: "1.125rem",
        }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          bottom: "24px",
          left: 0,
        }}
      >
        <Chip label={`createdAt : ${date && date[0]}`} />
      </Box>
    </Box>
  );
};

export default CardBody;
