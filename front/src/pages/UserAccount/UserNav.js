import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import {
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import ShopIcon from "@material-ui/icons/Shop";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  drawer: {
    width: "700px",
    background: "blue",
  },
});

function UserNav() {
  const classes = useStyles();
  const history = useHistory();
  const ListItems = [
    {
      text: "Purchases",
      component: { NavLink },
      icons: <ShopIcon />,
      onClick: "/user/Purchases",
    },
    {
      text: "Profile",
      component: { NavLink },
      icons: <HomeIcon />,
      onClick: "/user/Profile",
    },
    {
      text: "User",
      component: { NavLink },
      icons: <PersonIcon />,
      onClick: "/user",
    },
  ];
  return (
    <div>
      <List>
        {ListItems.map((texts, index) => {
          const { text, icons, onClick, component } = texts;
          return (
            <ListItemIcon button component={component} to={onClick} key={index}>
              {icons}
              <ListItemText primary={text} />
            </ListItemIcon>
          );
        })}
      </List>
    </div>
  );
}

export default UserNav;
