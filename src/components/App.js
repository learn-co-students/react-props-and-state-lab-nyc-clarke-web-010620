import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  filterType = (event) => {
    this.setState({
      filters: { ...this.state.filters, type: event.target.value}
    })
    // debugger
  }

  fetchFunction = () => {
    if(this.state.filters.type === 'all'){
      fetch("/api/pets")
      .then(resp=>resp.json())
      .then( animals => this.setState({ pets: animals }))
    }
    else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp=>resp.json())
      .then( animals => this.setState({ pets: animals }))
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
              <Filters animalFilter={this.filterType}  
                       petsClick={this.fetchFunction} />
            </div>
            <div className="twelve wide column">
              <PetBrowser petShow={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
