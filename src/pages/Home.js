import React, { PureComponent } from 'react'
import Topbar from '../components/Topbar'
import TitlebarGridList from '../components/TitlebarGridList'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import blueGrey from '@material-ui/core/colors/blueGrey'
import cyan from '@material-ui/core/colors/cyan'
import blue from '@material-ui/core/colors/blue'
import CategoryCard from '../components/CategoryCard'
import AlarmIcon from '@material-ui/icons/Alarm'

const styles = theme => ({
  claimContainer: {
    height: 700,
    display: 'inline-flex'
  },
  gridLeft: {
    flex: 1,
    color: theme.palette.text.primary,
  },
  gridRight: {
    flex: 1,
    background: cyan[100],
  },
  claim: {
    fontSize: 74,
    paddingTop: 60,
    paddingLeft: 50,
    overflowY: 'hidden',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: blueGrey[900],
  },
  cardsContainer: {
    paddingTop: 30,
    background: blue[100],
  }
});

function Home(props) {
  const { classes } = props;
    return (
      <div>
        <Topbar />
        <div className={classes.claimContainer}>
            <div className={classes.gridLeft}>
              <h1 className={classes.claim}>Sickerz,<br/>adesivi personalizzati che spaccano!</h1>
            </div>
            <div className={classes.gridRight}>

            </div>
        </div>
        <TitlebarGridList />
      </div>
    )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home)
