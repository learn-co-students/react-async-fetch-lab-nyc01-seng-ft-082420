// create your App component here

import React from 'react'
//import Spacees from './components/Spacees'

class App extends React.Component {
    state = {
        spacePeople: []
    }


    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json').then(resp => resp.json()).then(data => this.setState({
            spacePeople:  data.people
        })
        )
    }

    renderSpacePeople = () => {
        let persons = this.state.spacePeople
       return persons.map(x => {
          return  <li>SpacePerson : {x.name}         Onboard : {x.craft}</li>
       } 
        )
    }

    render() {
        console.log(this.state.spacePeople)
        return(
            <div>
                <h3>List of People in Space</h3>
                
                    {this.renderSpacePeople()}
                
            </div>
        )
    }
}

export default App
