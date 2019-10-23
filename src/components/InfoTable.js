import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Data
function createData(id, date, height, weight) {
  return { id, date, height, weight };
}

const rows = [
  createData(0, "16 Mar, 2019", "4'5", 80),
  createData(1, "16 Mar, 2019", "4'8", 93),
  createData(2, "16 Mar, 2019", "4'2", 74)
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function InfoTable(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Child Data</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Screen Date</TableCell>

            <TableCell>Height</TableCell>
            <TableCell align="right">Weight(lbs)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>

              <TableCell>{row.height}</TableCell>
              <TableCell align="right">{row.weight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          Add a record
        </Link>
      </div>
    </React.Fragment>
  );
}
