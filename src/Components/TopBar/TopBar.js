import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, AppBar, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - 240px)`,
    marginLeft: 240,
  }
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <Typography variant="h6" noWrap>
        Team Management App
      </Typography>
    </Toolbar>
  </AppBar>
  );
}