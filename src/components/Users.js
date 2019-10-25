import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUsers, setCountry } from "../actions/index";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const Users = ({ users, error, getUsers }) => {
  //axios call to get users --> display their Id, name, admin, country_code
  console.log(users);
  useEffect(() => {
    getUsers();
  }, []);
  const [admin, setAdmin] = useState(false);
  const [countries, setCountries] = useState([
    { id: 1, country: "United States" },
    { id: 2, country: "China" },
    { id: 3, country: "Ghana" },
    { id: 4, country: "Peru" },
    { id: 5, country: "Mexico" }
  ]);
  const [countryId, setCountryId] = useState();

  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
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
  // const handleSubmit =(e)=>{
  //     e.preventDefault()
  //     admin?console.log('null'):console.log(country)
  // }
  const handleChange = name => event => {
    // setCountryId(event.target.value);
    // setAdmin(event.target.value);
  };
  return (
    <div>
      <AppBar position="relative">
        <Typography variant="h6" color="inherit" align="center">
          Users
        </Typography>
      </AppBar>
      <Grid container spacing={4}>
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
                  <MenuItem key={option.id} value={option.id}>
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
                  admin ? console.log("null") : console.log(e);
                }}
                className={classes.submit}
              >
                Submit Changes
              </Button>
            </Box>
            {/* <form>
                        <label> Grant Administrative Privileges<br/>
                            <select onChange={(e)=>{handleChange(e)}}>
                                <option>false</option>
                                <option>true</option>
                            </select>
                        </label> */}
            {/* {admin?<select disabled>
                            <option>-</option>)
                        </select>:<select onChange={(e)=>{setCountry(e.target.value)}}>
                            {countries.map(country=>
                                <option>{country}</option>)}
                        </select>}
                        <button onClick={handleSubmit}>Save Changes</button>
                    </form> */}
          </>
        ))}{" "}
      </Grid>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    ...state,
    users: state.operation.users,
    error: state.operation.error
  };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
