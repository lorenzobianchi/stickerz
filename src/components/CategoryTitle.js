import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    position: 'relative',
    zIndex: 10,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
};

function CategoryTitle(props) {
  const { classes, title } = props;
  return (
    <div className={classes.title}>
      <Typography className={classes.title} color="textSecondary">
        {title}
      </Typography>
    </div>
  );
}

CategoryTitle.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryTitle);
