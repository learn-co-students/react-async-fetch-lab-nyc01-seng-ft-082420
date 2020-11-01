import React from 'react'

class App extends React.Component{
  state = {
    people: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(api => {
      this.setState({people: api.people})
    })
  }

  renderData = () =>{
    return this.state.people.map((person, id)=> <h1 key={id}>{person.name}</h1>)
  }
  render(){
    return(
      <div>
        {this.renderData()}
      </div>
    )
  }
}

export default App
