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
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  claim: {
    fontSize: 74,
    paddingTop: 60,
    paddingLeft: 50,
    overflowY: 'hidden',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  cardsContainer: {
    paddingTop: 30,
    background: blue[100],
  },
  scene: {
    width: 200,
    height: 200,
    border: '1px solid #CCC',
    margin: 40,
  },
 panel: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, #333 20%, darkslategrey 90%)',
    /* perspective function in transform property */
    transform: 'perspective(600px) rotateY(45deg)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
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
              <div className={classes.scene}>
                <div className={classes.panel}><h1 className='nanum'>Stickerz</h1></div>
              </div>
            </div>
        </div>
        <Paper className={classes.paper} elevation={4}>
          <Typography variant="headline" component="h2">
            Scegli il tipo di adesivo che preferisci
          </Typography>
        </Paper>
        <TitlebarGridList />
      </div>
    )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home)
