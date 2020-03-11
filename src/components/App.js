import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'
const BASEURL = "/api/pets"

class App extends React.Component {
  state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

  onChangeType = (newType) => {
    this.setState({
      filters: {
        type : newType
      }
    }) 
  }

  onAdoptPet = (id) => {
    console.log(id)
    const pets = this.state.pets.map( pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    })
    this.setState({
        pets: pets
    })
  }
  
  onFindPetsClick = () => {
    console.log(this.state.filters.type)
    if (this.state.filters.type === "all"){
    fetch(`${BASEURL}`)
    .then(resp=> resp.json())
    .then(pets => {this.setState({pets: pets})})
    } else {
    fetch(`${BASEURL}?type=${this.state.filters.type}`)
    .then(resp=> resp.json())
    .then(pets => {this.setState({pets: pets})})
    }
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
