import React from 'react'

class App extends React.Component{
    
    state = {
        SpacePeople: []

    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            this.setState({
               SpacePeople: data.people
           })
        } )
    }

   

    render(){
        return(
            <div>
                <h1>I'm APP</h1>
                {this.state.SpacePeople.map((person ,id) => <h1 key={id}>{person.name}</h1>)}
            </div>
        )
    }
}

export default App
