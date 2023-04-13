import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#FF6B3D',
    color: '#FFFFFF',
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
  },
  userIcon: {
    color: '#FFFFFF',
    size:"20px"
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          aiRent
        </Typography>
        <AccountCircle className={classes.userIcon} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
