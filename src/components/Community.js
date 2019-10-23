import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getThemeProps } from "@material-ui/styles";
import AddChild from "./AddChild";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Nutrition Status Tracking
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Community(props) {
  //get users country ID and compare that to the country id we are in
  //mock data
  const currentCommunity = props.match.params.id;
  const userId = 0;
  const CountryId = 0;
  let user = {
    admin: true
  };
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
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {currentCommunity}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {userId === CountryId ? (
          <Container maxWidth="sm">
            <div className={classes.heroButtons}>
              {user.admin ? (
                <AddChild setChildren={setChildren} children={children} />
              ) : (
                <></>
              )}
            </div>
          </Container>
        ) : (
          <></>
        )}

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {children.map(child => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://cdn.dribbble.com/users/1044993/screenshots/6797235/sea-otter_dribbble.png"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {child.name}
                    </Typography>
                    <Typography>Parent: {child.parentName}</Typography>
                    <Typography>Contact info: {child.contactInfo}</Typography>
                    <Typography>Height: {child.height}cm</Typography>
                    <Typography>Weight: {child.weight}cm</Typography>
                    <Typography>
                      Last screened date:{" "}
                      {child.screenDate[child.screenDate.length - 1]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link href={`/child/${child.childId}`}>View</Link>
                    </Button>
                    {CountryId === userId ? (
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    ) : (
                      <></>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}
