import React, {Component} from 'react';
import {CardList} from "./components/card-list/card-list.component";
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      cartoons : []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(users => this.setState({cartoons : users}));
  }

  render() {
    return (
        <div className="App">
          <CardList cartoons={this.state.cartoons} />
        </div>
    );
  }
}

export default App;
