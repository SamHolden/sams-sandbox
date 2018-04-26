import React, {Component} from 'react';
import Button from 'material-ui/Button';

class RaisedButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Button variant="raised" label="Default" style={{marginTop: "12px"}} onClick={this.props.onclick}>{this.props.children}</Button>
        )
    }

}

export default RaisedButton;