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

export default function ChildrenList() {
  //get users country ID and compare that to the country id we are in
  //mock data
  const userId = 0;
  const CountryId =0;
  const [children, setChildren] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    axios
      .get("http://hp-api.herokuapp.com/api/characters")
      .then(res => {
        console.log(res.data);
        setChildren(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Community Page
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {(userId===CountryId)?<Container maxWidth="sm">
          <div className={classes.heroButtons}>
            <Button variant="contained" color="primary">
              Add Child
            </Button>
          </div>
        </Container>:<></>}

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
                    <Typography>Child information</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link href="/child">View</Link>
                    </Button>
                    {(CountryId===userId)?<Button size="small" color="primary">
                      Edit
                    </Button>:<></>}
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
