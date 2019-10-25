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

import AddChild from "./AddChild";
import {getChild, addChild} from '../actions/index'
import {connect} from 'react-redux' 

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

function Community({location, getChild, children, addChild, match}) {
  //get users country ID and compare that to the country id we are in
  //mock data
  console.log(match)
  console.log(location.state)
  const [edit, setEdit] = useState(false)
  console.log(edit)
  const community = (location.state.community)
  const newKid ={child_name: "uzias",
  parent_name: "bill",
  contact_info: "123",
  gender: "male",
  date_of_screening: "1/1/2019",
  height: "62",
  weight: "200",
  date_of_birth:'1/1/2019'}

  useEffect(()=>{
    getChild(community.id)
    // addChild(newKid, community.id)
    
  },[])
  console.log('this is the children format',children)
  const userId = 0;
  const CountryId = 0;
  let user = {
    admin: true
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {community.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {userId === CountryId ? (
          <Container maxWidth="sm">
            <div className={classes.heroButtons}>
              {user.admin ? (
                <AddChild addChild={addChild} id={community.id}/>
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
              <Grid key={child.id} item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://cdn.dribbble.com/users/1044993/screenshots/6797235/sea-otter_dribbble.png"
                    title="Image title"
                  />
                  {!edit?<CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {child.child_name}
                    </Typography>
                    <Typography>DOB: {child.date_of_birth}</Typography>
                    <Typography>Parent: {child.parent_name}</Typography>
                    <Typography>Contact info: {child.contact_info}</Typography>
                    <Typography>Height: {child.height}cm</Typography>
                    <Typography>Weight: {child.weight}kg</Typography>
                    <Typography>Screening: {child.date_of_screening}</Typography>
                  </CardContent>:<CardContent>
                  <Typography gutterBottom variant="h5" component="h2">Name: 
                  <input value={child.child_name}></input>
                    </Typography>
                    <Typography>DOB: <input value={child.date_of_birth}></input></Typography>
                    <Typography>Parent: <input value={child.parent_name}></input></Typography>
                    <Typography>Contact info: <input value={child.contact_info}></input></Typography>
                    <Typography>Height: <input value={child.height}></input>cm</Typography>
                    <Typography>Weight: <input value={child.weight}></input>kg</Typography>
                    <Typography>Screening: <input value={child.date_of_screening}></input></Typography>
                  </CardContent>}
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link href={`/child/${child.id}`}>View</Link>
                    </Button>
                      <Button onClick={()=>setEdit(!edit)}size="small" color="primary">
                        Edit
                      </Button>
                   
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
const mapStateToProps = state =>{
  return{
    ...state,
    children: state.operation.children

  }
}

export default connect(mapStateToProps,{getChild, addChild})(Community)