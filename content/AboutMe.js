import React from 'react';

import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import RaisedButton from "../components/RaisedButton";


let style = {
    contentWindow: {
        position: 'fixed',
        top: '64px',
        left: '256px',
        width: '86%',
        height: '100%'
    },

    frame: {
        width: '100%',
        height: '100%',
    },

    profileCard: {
        margin: '7.5% auto',
        padding: '8px',
        width: '30%',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center'
    },

    summaryCard: {
        margin: '7.5% auto',
        padding: '24px',
        width: '75%',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center'
    }
};

class AboutMe extends React.Component{
    constructor(props){
        super();
        this.classes = props.classes;
        this.state = {stage: 'introduction'};

        this.setStageToSummary = this.setStageToSummary.bind(this);
        this.setStageToIntroduction = this.setStageToIntroduction.bind(this);
    }

    setStageToSummary(){
        this.setState({stage: 'summary'});
    };

    setStageToIntroduction(){
        this.setState({stage: 'introduction'});
    };

    render(){
        switch(this.state.stage){
            case 'introduction': {
                //Render the introduction page
                return (
                    <div className={this.classes.contentWindow}>
                        <Paper className={this.classes.profileCard} style={{padding: '0'}}>
                            <div style={{backgroundColor: '#616161', width: '100%', padding: '24px 0'}}>
                                <img
                                    alt="Sam Holden"
                                    src="../resources/profilePic.png"
                                    style={{borderRadius: '50%', width: '260px', height: '260px', border: '2px solid rgba(256, 256, 256, 0.4)', boxSizing: 'border-box', margin: '16px'}}
                                />
                                <Typography variant="display1" style={{color: 'white'}}>
                                    Welcome To My Page
                                </Typography>
                            </div>

                            <p style={{margin: '24px 50px', boxSizing: 'border-box'}}>
                                I'm Sam, a junior web developer and amateur musician based in Manchester <br /> <br />
                                I like to mess around with little projects so I made this page to keep them all in one place
                            </p>
                            <div style={{backgroundColor: '#1d87e5', height: '64px', width: '100%', position: 'relative',}}>
                                <RaisedButton onclick={this.setStageToSummary}>More</RaisedButton>
                            </div>
                        </Paper>
                    </div>
                );
            }
            case 'summary': {
                //Render Summary Page
                return (
                    <div className={this.classes.contentWindow}>
                        <Paper className={this.classes.summaryCard} style={{padding: '0'}}>
                            <div style={{backgroundColor: '#1d87e5', width: '100%', padding: '24px 0', display: 'flex', justifyContent: 'center'}}>
                                <Typography variant="display2" style={{color: 'white'}}>
                                    Programming Experience
                                </Typography>
                            </div>
                            <div style={{backgroundColor: '#616161', width: '100%', padding: '24px 0', display: 'flex', justifyContent: 'space-around'}}>
                                <div>
                                    <img
                                        alt="React.js"
                                        src="../resources/React.png"
                                        style={{ width: '200px', height: '200px', boxSizing: 'border-box', margin: '16px'}}
                                    />
                                    <Typography variant="display2" style={{color: 'white', marginTop: '16px'}}>
                                        React.js
                                    </Typography>
                                </div>

                                <div>
                                    <img
                                        alt="Node.js"
                                        src="../resources/Node.png"
                                        style={{ width: '200px', height: '200px', boxSizing: 'border-box', margin: '16px'}}
                                    />
                                    <Typography variant="display2" style={{color: 'white', marginTop: '16px'}}>
                                        Node.js
                                    </Typography>
                                </div>
                                <div>
                                    <img
                                        alt="Firebase"
                                        src="../resources/Firebase.png"
                                        style={{ width: '200px', height: '200px', boxSizing: 'border-box', margin: '16px'}}
                                    />
                                    <Typography variant="display2" style={{color: 'white', marginTop: '16px'}}>
                                        Firebase
                                    </Typography>
                                </div>
                            </div>

                            <p style={{margin: '24px 50px', boxSizing: 'border-box'}}>
                                Graduated from University of Manchester in 2017 with a 2.1 BSc in Software Engineering (hons)  <br /> <br />
                                1 year industrial experience with Java EE and SQL Server for a leading telecoms company <br /> <br />
                                After saving money to take a year out after university, recently started investing time in the Javascript tech sphere <br /> <br />
                                Experimenting with SASS, Jade, Material.io, Socket.io, Google Cloud
                            </p>
                            <div style={{backgroundColor: '#1d87e5', height: '64px', width: '100%', position: 'relative',}}>
                                <RaisedButton onclick={this.setStageToIntroduction}>Back</RaisedButton>
                            </div>
                        </Paper>
                    </div>
                );
            }
            default: {
                return (
                    <div style={{margin: '20% 30%'}}>
                        <h1>Oops! Something went wrong</h1>
                        <h4 style={{opacity: '0.55'}}>Check back soon</h4>
                    </div>)
            }


        }
    }

}

AboutMe.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(style)(AboutMe);