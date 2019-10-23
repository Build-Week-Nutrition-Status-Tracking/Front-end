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
      <Title>Child Id</Title>
      <Typography component="p" variant="h4">
        Child Name
      </Typography>
      <Typography color="textSecondary" className={classes.childContext}>
        Child Info
      </Typography>
      <Typography component="p" variant="h5">
        blah blah
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          View record
        </Link>
      </div>
    </React.Fragment>
  );
}
