import { Tabs, Tab, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabIndexMap = ["/overview", "/activity", "/refresh", "/positions"];
  const currentTab = tabIndexMap.indexOf(location.pathname);

  const handleTabChange = (event, newValue) => {
    navigate(tabIndexMap[newValue]);
  };

  return (
    <Box>
      <Tabs
        value={currentTab === -1 ? 0 : currentTab}
        onChange={handleTabChange}
        centered
        textColor="inherit"
        indicatorColor="secondary"
      >
        <Tab label="Overview" />
        <Tab label="Activities" />
        <Tab label="Refresh" />
        <Tab label="Positions" />
      </Tabs>
    </Box>
  );
};

export default HomePage;
