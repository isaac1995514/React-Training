import React, {Component, Fragment} from 'react';

class UserOutput extends Component{

    render(){
        return(
            <div>
                <h1>User:  {this.props.user}</h1>
               <p>Paragraph 1</p>
               <span><p>Paragraph </p><p onClick = {this.props.onClickEmergency}>2</p></span>
            </div>
        );
    }
}

export default UserOutput;