import React from 'react';
import AppBar from 'material-ui/AppBar';

//Material UI Components
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

let drawerWidth = 240;


let style = {
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
};

function TopBar(props){
        const {classes} = props;
        return (
            <AppBar color='primary'>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Sam's Code Sandbox
                    </Typography>
                </Toolbar>
            </AppBar>
        );
}

TopBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(TopBar);