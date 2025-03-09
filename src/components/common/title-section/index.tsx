import { FC } from "react";
import { Typography } from "@mui/material";

interface IProps {
  title: string;
  number: number;
}

const TitleSection: FC<IProps> = ({ title, number }) => {
  return (
    <Typography
      variant="h3"
      component="h1"
      sx={{
        fontWeight: 800,
        color: "#150a4f",
        fontSize: { xs: "1.5rem", sm: "1.875rem" },
      }}
    >
      {title} <span style={{ color: "#9CA3AF" }}>{number}</span>
    </Typography>
  );
};

export default TitleSection;
