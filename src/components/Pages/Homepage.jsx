import ActivityPage from "./ActivityPage";
import OverviewPage from "./OverviewPage";
import UpdatePage from "./UpdatePage";
import AuthWrapper from "../Services/AuthWrapper";

import PropTypes from "prop-types";
import { setTab } from "../../Redux/slices/tabSlice";
import { setAccounts } from "../../Redux/slices/accountsSlice";
import store from "../../Redux/store";

import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from "@mui/material";
import { API_URLS } from "../../config";

const HomePage = () => {
  const dispatch = useDispatch();

  const tab = useSelector((state) => state.tab.value);

  useEffect(() => {
    fetch(API_URLS.PROD_BASE + API_URLS.ACC)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const accountData = data.accounts.map((account) => {
          return {
            label: account.type,
            account_number: account.account_number,
          };
        });
        dispatch(setAccounts(accountData));
        console.log("Store State");
        console.log(store.getState());
      });
  }, []);

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleTabChange = (event, tab) => {
    dispatch(setTab(tab));
  };

  return (
    <Fragment>
      <div>
        <AppBar sx={{ bgcolor: "#2E3B55" }} position="sticky">
          <Toolbar>
            <Box sx={{ width: "100%" }}>
              <Box sx={{}}>
                <Tabs
                  sx={{ ".Mui-selected": { color: `white` } }}
                  onChange={handleTabChange}
                  value={tab}
                  centered
                  textColor="white"
                >
                  <Tab label="Overview" {...a11yProps(0)} />
                  <Tab label="Activities" {...a11yProps(1)} />
                  <Tab label="Refresh" {...a11yProps(2)} />
                  <Tab label="Positions" {...a11yProps(3)} />
                </Tabs>
              </Box>
            </Box>
            <Typography variant="h5" component="div">
              PyTrade
            </Typography>
          </Toolbar>
        </AppBar>
        <CustomTabPanel value={tab} index={0}>
          <OverviewPage />
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={1}>
          <ActivityPage />
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={2}>
          <UpdatePage />
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={3}>
          Positions
        </CustomTabPanel>
      </div>
    </Fragment>
  );
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default HomePage;
