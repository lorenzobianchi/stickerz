import React from 'react'
import Topbar from '../components/Topbar'
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '../components/Dialog'
import teal from '@material-ui/core/colors/teal'

const xx = ['25 mm x 25 mm', '50 mm x 50 mm', '100 mm x 100 mm']
const styles = theme => ({
  container: {
    height: '100vh',
    display: 'inline-flex',
  },
  left: {
    flex: 1,
    background: teal[200],
  },
  right: {
    flex: 1,
    paddingTop: 70,
    padding: 40,
  }
});

function Rotondi(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Topbar />
      <div className={classes.container}>
        <div className={classes.left}>

        </div>
        <div className={classes.right}>
          <Typography variant="headline" component="h1">
            Adesivi Rotondi
          </Typography>
          <Typography component="p">
            I nostri adesivi rotondi sono perfetti per mettere in evidenza il tuo logo,
            sono adatti ad ogni uso, anche come etichette. Ogni adesivo è super resistente e
            la sua finitura opaca esalta colori brillanti e grafiche accattivanti per un risultato davvero unico.
          </Typography>
          <Dialog
            chooses={xx}
            text={'Seleziona le dimensioni:'}
            buttonText='seleziona le dimensioni'
          />
        </div>
      </div>
    </div>
  );
}

Rotondi.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Rotondi);
