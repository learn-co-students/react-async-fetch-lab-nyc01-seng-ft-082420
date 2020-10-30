import React, { Component } from 'react';

class App extends Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => { this.setState ({ peopleInSpace: data.people}) })
    }

    renderPersonName = () => {
     return this.state.peopleInSpace.map(person => {
            return (
                <div>
                    <h2>{person.name}</h2>
                </div>
            )
        })
    }


    render() {
        return(
            <div className="App">
                {this.renderPersonName()} 
            </div>
        )
    }


}

export default App;