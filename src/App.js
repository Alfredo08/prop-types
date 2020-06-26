import React from 'react';
import Profile from './Profile';
import './App.css';
import CatchError from './CatchError';

class App extends React.Component{

  state = {
    name : "Alex",
    age : 30,
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
      
    return (
      <div className="App">
        
          <Profile/>
          {/*<Profile name={this.state.name} age={this.state.age} /> */}

      </div>
    );
  }
  }
}

export default App;
