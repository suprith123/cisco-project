import React from 'react';

const withCounter=(WrappedComponent)=>{
    class WithCounter extends React.Component{
        constructor(props){
            super(props);
            this.state={
                count:0,
            }
            this.incrementCount=this.incrementCount.bind(this);
        }
        incrementCount=()=>{
            this.setState((prevState)=>{
                return {count:prevState.count+1}
            })
        }
        render(){
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }
    return WithCounter;
}
export default withCounter;