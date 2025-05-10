import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const OverviewPage = () => {
  const [totalCommission, setTotalCommission] = useState(0);
  const [totalDividends, setTotalDividends] = useState(0);
  const [tradesCount, setTradesCount] = useState(0);
  // const accountFilter = useSelector((state) => state.accountFilter.value);

  const envConstants = import.meta.env.VITE_API_URLS;
  useEffect(() => {
    const pageURL = envConstants.PROD_BASE + envConstants.OVERVIEW;
    Promise.all([
      fetch(`${pageURL + envConstants.COM}`),
      fetch(`${pageURL + envConstants.DIV}`),
      fetch(`${pageURL + envConstants.TRADES}`),
    ])
      .then(async ([comission, dividends, trades]) => {
        const commissionData = await comission.json();
        // const dividendsData = await dividends.json();
        const tradesData = await trades.json();

        setTotalCommission(commissionData.totalAmount);
        //setTotalDividends(dividendsData.totalAmount);
        setTradesCount(tradesData.tradesCount);
        return { commissionData, tradesData };
      })
      .then((responseText) => {
        console.log("response Text");
        console.log(responseText);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={"2"}
      >
        <Grid item>
          <Card>
            <CardContent>
              <Typography
                component={"div"}
                sx={{ mb: 1.5 }}
                color="text.secondary"
              >
                Total Commission
              </Typography>
              <Typography component={"span"} variant="body2">
                {totalCommission}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography
                component={"div"}
                sx={{ mb: 1.5 }}
                color="text.secondary"
              >
                Total Dividends
              </Typography>
              <Typography component={"div"} variant="body2">
                {totalDividends}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardContent>
              <Typography
                component={"div"}
                sx={{ mb: 1.5 }}
                color="text.secondary"
              >
                Trades Count
              </Typography>
              <Typography component={"div"} variant="body2">
                {tradesCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default OverviewPage;
