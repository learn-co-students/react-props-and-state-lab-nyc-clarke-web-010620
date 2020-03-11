import React from 'react'

class Pet extends React.Component {
  render() {
    // console.log(this.props.petData)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.petData.gender === 'female' ? "♀" : "♂" }
            PET NAME: {this.props.petData.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE: {this.props.petData.type}</span>
          </div>
          <div className="description">
            <p>Age:{this.props.petData.age}</p>
            <p>Weight:{this.props.petData.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.petData.isAdopted ? null : <button className="ui primary button">Adopt pet</button> }
        </div>
      </div>
    )
  }
}

export default Pet
