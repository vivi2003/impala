import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {  } from '@material-ui/core/colors';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "red",
    zIndex:200
  },
  fontBottom:{
      color: "white",
  }
});

function Menu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link to="/"><BottomNavigationAction className={classes.fontBottom} label="Order Rooms" icon={<RestoreIcon />} /></Link>
      <Link to="/home"><BottomNavigationAction className={classes.fontBottom} label="Home" icon={<FavoriteIcon />} /></Link>
      <Link to="/history"><BottomNavigationAction className={classes.fontBottom} label="History" icon={<LocationOnIcon />} /></Link>
    </BottomNavigation>
  );
}
export default Menu;