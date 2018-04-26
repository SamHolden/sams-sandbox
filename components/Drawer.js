import React from 'react';

import MuiDrawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ListSubheader from 'material-ui/List/ListSubheader'
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { withStyles } from 'material-ui/styles';

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SpeakerNotes from '@material-ui/icons/SpeakerNotes';
import MonitorIcon from '@material-ui/icons/DesktopWindows';
import GameIcon from '@material-ui/icons/VideogameAsset';
import HeartIcon from '@material-ui/icons/Favorite';

const style = theme => ({
    drawerPaper: {
        position: 'relative',
        width: '100%',
    },

    nestedListItem: {
        paddingLeft: theme.spacing.unit * 4,
    }
});

let drawerStyle = {
    position: 'fixed',
    width: '14%',
    top: '64px',
    marginTop: '100px'
};

class Drawer extends React.Component{
    constructor(props){
        super();
        this.classes = props.classes;
        this.state = {open: false};
    }

    handleAboutMeListButtonClick() {
      this.setState({open: !this.state.open})
    };

    render() {
        return (
            <MuiDrawer
                variant="permanent"
                style={drawerStyle}>
                <List style={{marginTop: '64px'}}>
                    <div>
                        <ListItem onClick={this.handleAboutMeListButtonClick.bind(this)} button>
                            <ListItemIcon>
                                <InfoIcon/>
                            </ListItemIcon>
                            <ListItemText primary="About Me"/>
                            {this.state.open ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={this.state.open} timeout="auto">
                            <List component="div" disablePadding>
                                <ListItem button className={this.classes.nestedListItem}>
                                    <ListItemIcon>
                                        <ListItemIcon>
                                            <AccountCircle/>
                                        </ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Introduction" />
                                </ListItem>

                                <ListItem button className={this.classes.nestedListItem}>
                                    <ListItemIcon>
                                        <ListItemIcon>
                                            <SpeakerNotes/>
                                        </ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText inset primary="Summary" />
                                </ListItem>
                            </List>
                        </Collapse>
                    </div>
                </List>
                <Divider/>
                <List subheader={<ListSubheader>Projects</ListSubheader>}>
                    <div>
                        <ListItem button style={{color: '#FF9800'}}>
                            <ListItemIcon>
                                <GameIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Starline"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <MonitorIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Financial Demo"/>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <HeartIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Kiln & Craft"/>
                        </ListItem>
                    </div>
                </List>
            </MuiDrawer>
        );
    }
};

export default withStyles(style)(Drawer)