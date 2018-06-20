import React from 'react'
import Topbar from '../components/Topbar'
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '../components/Dialog'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
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
    paddingTop: 100,
    padding: 40,
  },
  title: {
    fontSize: 46,
    paddingTop: 60,
    paddingLeft: 30,
    color: 'white',
  },
  tableContainer: {
    maxWidth: 250,
    marginLeft: 30,
    // boxShadow: '3px 5px 5px darkslategrey',
  },
  misura: {
    backgroundColor: 'deepskyblue',
    color: 'white',
    padding: 4,
  },
  selectedMisura: {
    color: 'purple',
    fontWeight: 'bold',
    float: 'right',
    paddingRight: 20,
  },
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    textAlign: 'center',
    borderRadius: 5,
  },
  head: {
    paddingTop: 12,
    paddingBottom: 12,
    textAlign: 'center',
    backgroundColor: '#555',
    color: 'white',
    border: '1px solid deepskyblue',
  },
  cell: {
    border: '1px solid deepskyblue',
    paddingTop: 4,
    paddingBottom: 4,
    color: 'deepskyblue',
  },
  card: {
    display: 'flex',
    width: 300,
    marginTop: 60,
    marginLeft: 30,
    height: 60,
  },

  content: {
    flex: '1 0 auto',
  },
});

let id = 0;
function createData(quantita, prezzo) {
  id += 1;
  return { quantita, prezzo };
}

const data = [
  createData( 50, 78),
  createData( 100, 108),
  createData( 200, 160),
  createData( 300, 207),
  createData( 500, 293),
];

function Rotondi(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Topbar />
      <div className={classes.container}>
        <div className={classes.left}>
          <h1 className={classes.title}>Adesivi Rotondi</h1>
          <Card className={classes.tableContainer}>
            <div className={classes.misura}>MISURA: <span className={classes.selectedMisura}>25 mm x 25 mm</span></div>
            <table className={classes.table}>
              <thead>
                <tr>
                  <th className={classes.head}>Quantità</th>
                  <th className={classes.head}>Prezzo</th>
                </tr>
              </thead>
              <tbody>
                {data.map((n,i)=> {
                  return (
                    <tr key={n.id} style={{background: i % 2 === 0 ? 'white' : 'aliceblue'}}>
                      <td className={classes.cell}>{n.quantita}</td>
                      <td className={classes.cell}>{n.prezzo}{'€'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
          <Card className={classes.card}>
            <CardContent className={classes.content}>
              <div className={classes.cardText}>
                {}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className={classes.right}>
          {/* <Typography variant="headline" component="h1">
            Adesivi Rotondi
          </Typography> */}
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
