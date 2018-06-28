import React from 'react'
import Topbar from '../components/Topbar'
import SizeList from '../components/SizeList'
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal'

const xx = ['25 mm x 25 mm', '50 mm x 50 mm', '100 mm x 100 mm', 'misure personalizzata']
const styles = theme => ({
  container: {
    height: '100vh',
    display: 'inline-flex',
  },
  left: {
    flex: 1,
    background: teal[200],
    textAlign: 'center',
  },
  leftContainer: {
    width: '100%',
    textAlign: 'left',
    padding: 20,
    paddingTop: 0,
  },
  right: {
    flex: 1,
    paddingTop: 100,
    padding: 40,
  },
  title: {
    fontSize: 46,
    paddingTop: 60,
    paddingLeft: 30,
    color: 'white',
    marginBottom: 0,
  },
});

function Rotondi(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Topbar />
      <div className={classes.container}>
        <div className={classes.left}>
          <h1 className={classes.title}>Adesivi Rotondi</h1>
          <div className={classes.leftContainer}>
            <SizeList sizes={xx} />
          </div>
        </div>
        <div className={classes.right}>
          <Typography component="p">
            I nostri adesivi rotondi sono perfetti per mettere in evidenza il tuo logo,
            sono adatti ad ogni uso, anche come etichette. Ogni adesivo è super resistente e
            la sua finitura opaca esalta colori brillanti e grafiche accattivanti per un risultato davvero unico.
          </Typography>
        </div>
      </div>
    </div>
  );
}

Rotondi.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Rotondi);
