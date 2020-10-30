import React from 'react'

class Spacees extends React.Component {



    
    render(){
        console.log(this.props.person.people.name)
        return(
            <li>{this.props.person.people.name}</li>
        )
    }

}

export default Spacees