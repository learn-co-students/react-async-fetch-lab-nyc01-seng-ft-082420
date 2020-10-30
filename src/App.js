import React from 'react'

class App extends React.Component {

  state = {
    astronauts: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => {
        this.setState(() => ({astronauts: data.people}))
      })
  }

  renderAstronauts = () => {
    return this.state.astronauts.map(astro => {
      return (
        <div>
          <h1>{astro.name}</h1>
          <h3>{astro.craft}</h3>
        </div>
      )
    })
  }

  render() {
    console.log(this.state)
    return(
      <div>
        {this.renderAstronauts()}
      </div>
    )
  }
}

export default App
