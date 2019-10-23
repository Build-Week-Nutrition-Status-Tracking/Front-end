import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Chart from "./Chart";
import ChildCard from "./ChildCard";
import InfoTable from "./InfoTable";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  title: {
    flexGrow: 1
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

export default function Child(props) {
  const currentChild = props.match.params.id;
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [children, setChildren] = useState([
    {
      communityId: "1",
      childId: "1",
      userCountryId: "1",
      name: "Patricia Bugg",
      gender: "female",
      height: 147,
      weight: 40,
      parentName: "Kiehl Bugg",
      birthday: "07/06/2010",
      contactInfo: "304 834 5834",
      screenDate: ["04/05/2019", "03/04/2019"]
    },
    {
      communityId: "2",
      childId: "2",
      userCountryId: "2",
      name: "Rie Act II",
      gender: "male",
      height: 120,
      weight: 50,
      parentName: "Rie Act",
      birthday: "03/06/2010",
      contactInfo: "438 483 7447",
      screenDate: ["02/05/2019", "03/09/2019"]
    }
  ]);
  return (
    <div className={classes.root}>
      <CssBaseline />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <ChildCard child={children} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <InfoTable />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Copyright />
      </main>
    </div>
  );
}
