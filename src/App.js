import React, {Component} from 'react';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            cartoons: [],
            searchField: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(users => this.setState({cartoons: users}));
    }

    handleChange(e) {
        if (e.target.value != "") {
            this.setState({searchField: e.target.value})
        }
    };

    render() {
        const {cartoons, searchField} = this.state;
        const filteredCartoons = cartoons.filter(cartoon =>
            cartoon.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Cartoon characters</h1>
                <SearchBox
                    placeholder="Search for cartoon"
                    handleChange={this.handleChange}/>
                <CardList cartoons={filteredCartoons}/>
            </div>
        );
    }
}

export default App;
