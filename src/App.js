// create your App component here
import React from 'react'

export default class App extends React.Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(console.log)
    }


    render() {
        return <h1>Hi</h1>
    }
}