import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';

const styles = {
  avatar: {
    margin: 10,
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink[500],
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
};

function IconAvatar(props) {
  const { classes } = props;
  return (
      <Avatar className={classes.pinkAvatar}>
        <AssignmentIcon />
      </Avatar>
  );
}

IconAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconAvatar);
