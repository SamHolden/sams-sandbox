import React from 'react';

import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import AboutMe from '../content/AboutMe'

let style = {
    contentWindow: {
        position: 'fixed',
        top: '64px',
        left: '256px',
        width: '100%',
        height: '100%'
    },

    frame: {
        width: '100%',
        height: '100%',
    }
};

function ContentWindow(props){
    const {classes} = props;
    return (
        <div className={classes.contentWindow}>
            <AboutMe />
        </div>
    );
}

ContentWindow.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(ContentWindow);