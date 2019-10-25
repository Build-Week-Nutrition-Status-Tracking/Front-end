import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUsers, setCountry, updateUser, updateUserTest, getCountry } from "../actions/index";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import styled from 'styled-components'

const AllUsers = styled.div`
.centerMe{
  justify-content: center;
}
`

const Users = ({ users, error, getUsers, updateUser, updateUserTest, getCountry,countries }) => {
  //axios call to get users --> display their Id, name, admin, country_code
  console.log(countries)
  useEffect(() => {
    getUsers();
    getCountry();
  }, []);
  const [admin, setAdmin] = useState(false);
  // const [countries, setCountries] = useState([
  //   { id: 1, country: "United States" },
  //   { id: 2, country: "China" },
  //   { id: 3, country: "Ghana" },
  //   { id: 4, country: "Peru" },
  //   { id: 5, country: "Mexico" }
  // ]);
  const [updatedUser, setUpdatedUser] = useState({admin: 1, user_country_id: 1});
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      // justifyContent: "center",
      flexWrap: "wrap"
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    menu: {
      width: 200
    }
  }));

  const classes = useStyles();
  const boolean = [
    { label: "true", value: true },
    { label: "false", value: false }
  ];
  const handleChange = name => event => {
    // setCountryId(event.target.value);
    // setAdmin(event.target.value);
  };
  return (
    <AllUsers>
      <AppBar position="relative">
        <Typography variant="h6" color="inherit" align="center">
          Users
        </Typography>
      </AppBar>
      <Grid className='centerMe'container spacing={4}>
        {users.map(user => (
          <>
            <Box border={1} borderRadius="3%" m={1} p={1}>
              <Typography variant="h6" color="inherit">
                {user.id}
              </Typography>
              <Typography variant="h4" color="inherit">
                {user.username}
              </Typography>
              <Typography variant="h5" color="inherit">
                admin: {user.admin ? "true" : "false"}
              </Typography>
              <Typography variant="h6" color="inherit">
                Country Code:{" "}
                {user.user_country_id ? user.user_country_id : "not assigned"}
              </Typography>
              <TextField
                id="outlined-select-currency"
                select
                label="Select admin privilege"
                className={classes.textField}
                value={boolean.value}
                onChange={handleChange("currency")}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Grant Administrative Privileges"
                margin="normal"
                variant="outlined"
              >
                {boolean.map(option => (
                  <MenuItem key={option.label} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id={user.id}
                select
                label="Select country"
                className={classes.textField}
                value={users[user.id - 1].user_country_id}
                onChange={handleChange()}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                helperText="Choose Country for User"
                margin="normal"
                variant="outlined"
              >
                {countries.map(option => (
                  <MenuItem key={option.id} value={option.id} onChange={()=>{setUpdatedUser({...updatedUser, user_country_id:option.id})}}>
                    {option.country}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={e => {
                  e.preventDefault();
                  updateUser(user.id, updatedUser)
                }}
                className={classes.submit}
              >
                Submit Changes
              </Button>
            </Box>
          </>
        ))}{" "}
        <Button type="submit" fullWidth variant="contained" color="primary" onClick={()=>{updateUserTest({name:'uzias',job:'lambda'})}}>Update Sample</Button>
      </Grid>
    </AllUsers>
  );
};
const mapStateToProps = state => {
  return {
    ...state,
    users: state.operation.users,
    error: state.operation.error,
    countries: state.operation.countries
  };
};

export default connect(
  mapStateToProps,
  { getUsers, updateUser, updateUserTest,getCountry }
)(Users);
