import React from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Divider,
} from "@material-ui/core";
import vs from "./Assets/DesktopEnv.svg";

//Styling
const useStyles = makeStyles({
  mainContainer: {
    minHeight: "100vh",
    minWidth: "90vw",
    width: "100%",
  },
  subContainer: {
    padding: "1rem",
    width: "100%",
    height: "100%",
    display: "flex",
    marginLeft: "1px",
    marginRight: "1px",
  },
  subSubContainer: {
    padding: "1rem",
  },
});

export default function Fail() {

//   const imageChange = (data)=>{
//     //This will save us time in changing the picture
//     switch (data) {
//       case "Laptop":
//         return VS;
//       case "Tablet":
//         return Tablet;
//       default:
//         return VS;
//     } 
//   }
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={8}
      className={classes.mainContainer}>
      <Grid item sm={12} xs={12}>
        <Paper elevation={3} className={classes.subContainer}>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ padding: "1rem" }}>
            <Grid item sm={1} xs={12} className={classes.subSubContainer}>
              <List>
                <ListItem>
                  <ListItemText primary="Order Number" secondary="101001010" />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Config Number"
                    secondary="12312313123"
                  />
                </ListItem>
              </List>
            </Grid>

            <Grid item sm={8} xs={12} className={classes.subSubContainer}>
              <Grid
                container
                justify="center"
                alignItems="center"
                spacing={3}
                style={{ padding: "1rem" }}>
                <Grid item sm={3} xs={12}>
                  <img src={vs} alt="something" />
                </Grid>
                <Grid item sm={8} xs={12}>
                  <Container>
                    <Typography variant="h3">Configuration</Typography>
                    <Typography variant="subtitle1">Processor</Typography>
                    <Typography variant="subtitle1">RAM</Typography>
                    <Typography variant="subtitle1">GPU</Typography>
                    <Typography variant="subtitle1">Storage</Typography>
                  </Container>
                  <Container>
                    <Typography variant="subtitle1">Cost</Typography>
                  </Container>
                </Grid>
              </Grid>
            </Grid>

            <Grid item sm={3} xs={12} className={classes.subSubContainer}>
              <TableContainer style={{ margin: "auto" }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Detail</TableCell>
                    <TableCell aligh="right">$</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">Total Before Tax</TableCell>
                    <TableCell align="right">200</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Tax</TableCell>
                    <TableCell align="right">20</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Total after Tax</TableCell>
                    <TableCell align="right">220</TableCell>
                  </TableRow>
                </TableBody>
              </TableContainer>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
