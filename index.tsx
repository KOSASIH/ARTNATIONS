import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'ARTNATIONS Visitor'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
        Welcome to the international Museum of art and culture of the future.  
        
        This museum was founded by KOSASIH from Indonesia with the aim of helping preserve art and culture from around the world.
      
        Please browse and see our collection.
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
