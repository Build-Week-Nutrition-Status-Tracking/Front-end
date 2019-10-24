import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles({
  childContext: {
    flex: 1
  }
});

export default function ChildCard(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography component="p" variant="h4">
        Child Name: {props.child.name}
      </Typography>
      <Typography color="textSecondary" className={classes.childContext}>
        Contact Info: {props.child.contactInfo}
      </Typography>
      <Typography component="p" variant="h5">
        Parent Name: {props.child.parentName}
      </Typography>
    </React.Fragment>
  );
}
