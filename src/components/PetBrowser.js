import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
    render() {
        let petCards = this.props.pets.map((pet,index) => (
            <div className="ui cards">
            {console.log(pet)}
            <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet}/>
            </div>
        ))
            
        return <div>{petCards}</div>
    }
}

export default PetBrowser
