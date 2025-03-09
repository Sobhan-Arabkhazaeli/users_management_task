import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../partials";
import { Box, CssBaseline } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        {/* Main Content */}
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
