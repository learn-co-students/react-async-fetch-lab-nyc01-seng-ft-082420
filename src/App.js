import React from 'react'

class App extends React.Component {

  state = {
    astros: []
  }

  render(){
    console.log(this.state.astros)
    let arrayOfAstros = this.state.astros
    return (
      <div>
        {arrayOfAstros.map(ast => {
          return <h1>{ast.name}</h1>
        })}
      </div>
    )
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(r => r.json())
    .then(data => {
    this.setState({
      astros: data.people
    })})
  }


}

export default App
