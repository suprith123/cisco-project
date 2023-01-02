import React from 'react';
import withCounter from './withCounter';

class HoverCounter extends React.Component{
    
    render(){
        
        return(
            <>
            <h1 onMouseOver={this.props.incrementCount}>Hovered me {this.props.count} times</h1>
            </>
        )
    }
}
export default withCounter(HoverCounter);