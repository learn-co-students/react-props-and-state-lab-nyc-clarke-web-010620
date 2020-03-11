import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    console.log(this.props.petShow)
    return <div className="ui cards" > { this.props.petShow.map( pet=> {return <Pet key={pet.id} petData={pet}/>}) } </div>
  }
}

export default PetBrowser
