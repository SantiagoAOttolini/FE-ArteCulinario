import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Reward extends Component {
  render() {
    const reward = this.props.reward
    const rewardItems = (
      <div className='col-md-4' key={reward._id}>
        <div className='mb-5 thumbnail'>
          <img
            src={`http://localhost:5000/${reward.photo}`}
            alt='photo'
            width='100'
            height='200'
          />
          <p className='text-nowrap'>{reward.name}</p>
          <Link to={`/Recetas/${reward._id}`}>
            <button className='btn btn-info  text-white rounded h5'>
              Detalles
            </button>
          </Link>
        </div>
      </div>
    )

    return <div className='listOfRecipes'>{rewardItems}</div>
  }
}
