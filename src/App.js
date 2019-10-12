import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      display: ''
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to CMPE281 - Lab 2 - Google App Engine</h1>
          <button onClick={()=>{
            this.setState({
              display: "Hello!!"
            })
          }}>Click Me!</button>
          <h3 style={{WebkitTextFillColor:'white'}}>{this.state.display}</h3>
        </header>
      </div>
    );
  }
  
}

export default App;
