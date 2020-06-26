import React from 'react';

export default class CatchError extends React.Component{
    
    state = {
        hasError : false
    }

    static getDerivedStateFromError( error ){
        console.log( "Error" );
        console.log( error );
        return { hasError : true }
      }
    
      render(){
          if( this.state.hasError ){
              return(<div>This app has an error</div>);
          }
          else{
              return (this.props.children);
          }
      }
    
}