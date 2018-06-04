import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
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
  },
  container: {
    padding: 10,
    border: '2px solid white',
    borderRadius: 6,
    background: 'linear-gradient(45deg, #000 20%, darkslategrey 90%)',
  }
})

function StickerCssImage(props) {
    const { classes } = props;
    return (
      <div className={classes.scene}>
        <div className={classes.panel}>
          <div className={classes.container}>
            <h1 className='nanum'>Stickerz</h1>
          </div>
        </div>
      </div>
    )
}

StickerCssImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StickerCssImage)
