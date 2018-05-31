import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from '../data/tileData';
import indigo from '@material-ui/core/colors/indigo';
import { Link } from 'react-router-dom'
import IconAvatar from '../components/IconAvatar'

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
  },
  image: {
    width: '100%',
    height: 300,
  }

});


function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.col || 1} xs={24}>
            <Link to={`/${tile.link}`}>
              <img
                src={tile.img}
                alt={tile.title}
                className={classes.image}
              />
              <GridListTileBar
              title={<h1>{tile.title}</h1>}
              titlePosition="top"
              actionIcon={
                <IconAvatar />
              }
              actionPosition="left"
              className={classes.titleBar}
            />
            </Link>
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
