import React from 'react';
import withCounter from './withCounter';

class ClickCounter extends React.Component{
    render(){
        return(
            <>
            <h1>clicked me {this.props.count} times </h1>
            <button onClick={this.props.incrementCount}>Click me</button>
            </>
        )
    }
}
export default withCounter(ClickCounter);