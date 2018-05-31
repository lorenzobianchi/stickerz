import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #0080ff 30%, #00bfff 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  },
  label: {
    textTransform: 'capitalize',
    paddingBottom: 16,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="fixed" color="default" classes={{root: classes.root}}>
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            className={classes.label}
            >
            Stickerz
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
