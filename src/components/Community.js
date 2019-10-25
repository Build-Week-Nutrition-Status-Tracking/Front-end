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
import styled from 'styled-components'
import AddChild from "./AddChild";
import {getChild, addChild, deleteChild, updateChild} from '../actions/index'
import {connect} from 'react-redux' 

const FormStyle = styled.form`
display:flex;
flex-wrap: wrap;
justify-content: center;
input{
  width: 20%;
  margin: 2px;
}
button{
  margin: 2% 0;
  background:#3f51b5;
  color: snow;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  :hover{
    background: snow;
    border: #3f51b5 1px solid;
    color: #3f51b5;
  }
}
`

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

function Community({location, getChild, children, addChild, deleteChild, updateChild, match}) {
  //get users country ID and compare that to the country id we are in
  //mock data
  console.log(match)
  console.log(location.state)
  const [editField, setEditField] = useState({edit:false,id:''})
  console.log(editField)
  const community = (location.state.community)
const [child, setChild] = useState({})
const handleChange = event => {
  setChild({ ...child, [event.target.name]: event.target.value });
};

useEffect(()=>{
  getChild(community.id)
  // addChild(newKid, community.id)
  
},[])

console.log(child)
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
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {child.child_name}
                    </Typography>
                    <Typography>DOB: {child.date_of_birth}</Typography>
                    <Typography>Parent: {child.parent_name}</Typography>
                    <Typography>Contact info: {child.contact_info}</Typography>
                    <Typography>Height: {child.height}cm</Typography>
                    <Typography>Weight: {child.weight}kg</Typography>
                    <Typography>Screening: {child.date_of_screening}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <Link href={`/child/${child.id}`}>View</Link>
                    </Button>
                      <Button size="small" color="primary" onClick={()=>{deleteChild(child.id)}}>
                       Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            <Container>
            <FormStyle>
              <div>
                <input name="child_name" onChange={handleChange} placeholder="Child Name" value={child.name}></input>
                <input name="parent_name" onChange={handleChange} placeholder="Parent Name" value={child.parentName}></input>
                <input name="contact_info" onChange={handleChange} placeholder="Contact Info" value={child.contactInfo}></input>
                <input name="gender" onChange={handleChange} placeholder="Gender: male/female" value={child.gender}></input>
                <input name="weight" onChange={(event)=>{setChild({ ...child, [event.target.name]: Number(event.target.value) });}} placeholder="Weight" value={child.weight}></input>
                <input name="height"
                  onChange={(event)=>{setChild({ ...child, [event.target.name]: Number(event.target.value) });}} placeholder="Height" value={child.height}></input>
                <input name="date_of_screening" onChange={handleChange} placeholder="Screen Date" value={child.screenDate}></input>
                <input name="date_of_birth" onChange={handleChange} placeholder="DOB" value={child.screenDate}></input>
              </div>
              <button
                onClick={e => {
                  e.preventDefault()
                  addChild(community.id, child);
                }}
              >
                Add Child
              </button>
              </FormStyle>
            </Container>
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

export default connect(mapStateToProps,{getChild, addChild, deleteChild, updateChild})(Community)

//{(editField.edit&&(child.id===editField.id))?<CardContent>
{/* <Typography gutterBottom variant="h5" component="h2">Name: 
<input name='child_name' value={kidObj.child_name} onChange={(e)=>changeHandler(e)}></input>
  </Typography>
  <Typography>DOB: <input name='date_of_birth' value={kidObj.date_of_birth} onChange={(e)=>changeHandler(e)}></input></Typography>
  <Typography>Parent: <input name='parent_name' value={kidObj.parent_name} onChange={(e)=>changeHandler(e)}></input></Typography>
  <Typography>Contact info: <input name='contact_info' value={kidObj.contact_info} onChange={(e)=>changeHandler(e)}></input></Typography>
  <Typography>Height: <input name='height' value={kidObj.height} onChange={(e)=>changeHandler(e)}></input>cm</Typography>
  <Typography>Weight: <input name='weight' value={kidObj.weight} onChange={(e)=>changeHandler(e)}></input>kg</Typography>
  <Typography>Screening: <input name='date_of_screening' value={kidObj.date_of_screening} onChange={(e)=>changeHandler(e)}></input></Typography>
  <br/><Button onClick={()=>{updateChild(kidObj)}}>Confirm Edit</Button>
</CardContent>: */}

{/* <Button onClick={()=>{
    setEditField({edit:!editField.edit, id:child.id})
    setKidObj({...child})
}}
size="small" color="primary">
    Edit
  </Button> */}