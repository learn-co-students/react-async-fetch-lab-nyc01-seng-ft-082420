import React, { Component } from "react"

class App extends Component {

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
            .then(response=>response.json())
            .then(console.log)
    }

    render(){
        return(
            <div className="App">
                <h1>Show Me All the People In Space</h1>
                {}
            </div>
        )
    }
}

export default App