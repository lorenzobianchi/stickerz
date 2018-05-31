import React, { PureComponent } from 'react'
import Topbar from '../components/Topbar'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';
import Paper from '@material-ui/core/Paper'
import Stars from '@material-ui/icons/Stars'
import red from '@material-ui/core/colors/red'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    background: orange[300],
    color: green[800],
    paddingTop: 200,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

function Stickers(props) {
  const { classes } = props;
    return (
      <div>
        <Topbar />
        <div className={classes.root}>
          <div>
            <div>
              <Typography variant="display3" gutterBottom>
                Stikers a taglio
              </Typography>
            </div>
            <div>
              <Typography variant="display3" gutterBottom>
                Stikers rotondi
              </Typography>
            </div>
            <div>
              <Typography variant="display3" gutterBottom>
                Stikers rettangolari
              </Typography>
            </div>
          </div>
        </div>
      </div>
    )
}

Stickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Stickers)
