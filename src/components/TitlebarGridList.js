import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import SimpleCard from '@material-ui/core/GridListTileBar';
import ListSubheader from './SimpleCard';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from '../data/tileData';
import indigo from '@material-ui/core/colors/indigo';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: indigo[500],
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  title: {
    fontSize: 28,
    padding: 15,
    color: '#fff',
  }
});


function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.col || 1}>
            <img src={tile.img} alt={tile.title} />
            <SimpleCard title={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
