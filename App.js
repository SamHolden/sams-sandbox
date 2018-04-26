import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import purple from 'material-ui/colors/deepPurple';

import TopBar from './components/TopBar';
import Drawer from './components/Drawer'
import ContentWindow from './components/ContentWindow'

import { withStyles } from 'material-ui/styles';


const theme = createMuiTheme({
    direction: "ltr",
    palette: {
        primary: {
            light: '#69b6ff',
            main: '#1d87e5',
            dark: '#005bb2'
        },
        secondary: {
            light: '#8559da',
            main: '#512da8',
            dark: '#140078'
        }
    }
});

let style = {

};

function App(props){
    const {classes} = props;
    return (
        <MuiThemeProvider theme={theme}>
            <Drawer/>
            <TopBar/>
            <ContentWindow/>
        </MuiThemeProvider>
    )
}

export default withStyles(style)(App);