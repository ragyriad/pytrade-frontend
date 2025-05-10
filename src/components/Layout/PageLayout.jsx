import { Outlet } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";

const PageLayout = () => {
  return (
    <>
      <AppBar sx={{ bgcolor: "#2E3B55" }} position="sticky">
        <Toolbar>
          <Typography variant="h5">PyTrade</Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default PageLayout;
