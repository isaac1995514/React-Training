import React, {Component, Fragment} from 'react';

class UserInput extends Component{

    render(){
        return(
            <div>
                <input type = "text" onChange = {this.props.onChangeUsername} value = {this.props.username}></input>
            </div>
        );
    }
}

export default UserInput;