import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  Container,
  makeStyles,
  IconButton,
  useMediaQuery,
  useTheme,
  MenuItem,
  Menu,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import MenuIcon from "@material-ui/icons/Menu";
import ShopOutlinedIcon from "@material-ui/icons/ShopOutlined";
import { CartContext } from "../Context/CartContext";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#2b2b2b",
    boxShadow: "none",
  },
  font: {
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#d3d3d3",
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
});

export default function Nav() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { cart } = useContext(CartContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.header}>
      <Container>
        <Toolbar color="inherit">
          <Typography component={NavLink} to="/" className={classes.font}>
            LB
          </Typography>
          {isMobile ? (
            <>
              {/* This is the menu icon when mobile */}
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu">
                <MenuIcon onClick={handleClick} />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>
                  <Button component={NavLink} to="/DeepinPro" color="inherit">
                    DeepinPro
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button component={NavLink} to="/iTab" color="inherit">
                    iTab
                  </Button>
                </MenuItem>
                {/* <MenuItem onClick={handleClose}>
                  <Button component={NavLink} to="/iDeep" color="inherit">
                    iDeep
                  </Button>
                </MenuItem> */}
                <MenuItem onClick={handleClose}>
                  <Button component={NavLink} to="/Login" color="inherit">
                    Login
                  </Button>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              {" "}
              <Button component={NavLink} to="/DeepinPro" color="inherit">
                DeepinPro
              </Button>
              <Button component={NavLink} to="/iTab" color="inherit">
                iTab
              </Button>
              {/* <Button component={NavLink} to="/iDeep" color="inherit">
                iDeep
              </Button> */}
              <IconButton component={NavLink} to="/Login" color="inherit">
                <PersonIcon />
              </IconButton>
              <IconButton component={NavLink} to="/Cart" color="inherit">
                <ShopOutlinedIcon />

                {cart.length - 1 === 0 ? (
                  ""
                ) : (
                  <span
                    style={{
                      position: "relative",
                      top: "-5px",
                      left: "-8px",
                      zIndex: "1rem",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      borderRadius: "9px",
                      backgroundColor: "white",
                      color: "black",
                      fontSize: "1rem",
                    }}>
                    {cart.length - 1}
                  </span>
                )}
              </IconButton>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
