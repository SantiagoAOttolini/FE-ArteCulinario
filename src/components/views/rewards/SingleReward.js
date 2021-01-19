import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRewards } from '../../../_actions/rewards_actions'
import Favorite from './Favorite'

class SingleReward extends Component {
  constructor(props) {
    super(props)
    const id = this.props.match.params.id
    this.state = {
      recipe: {},
      id,
      loading: true
    }
  }

  async componentDidMount() {
    try {
      await this.props.fetchRewards()
    } catch (e) {
      console.log(e)
    }
  }

  componentDidUpdate() {
    if (!this.state.reward.name && this.props.reward) {
      const detailReward = this.props.reward.find(
        x => x._id.toString() === this.state.id.toString()
      )

      if (detailReward) {
        this.setState({
          reward: detailReward,
          loading: false
        })
      }
    }
  }

  render() {
    const reward = this.state.reward
    const id = this.state.reward._id
    console.log(id)

    if (this.state.loading) {
      return (
        <div>
          <div>
            <div>
              <h2>Cargando Receta...</h2>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div>
        <div>
          <div className='d-flex justify-content-center'>
            <h3 className='titleReceta rounded mt-3'>
              <strong>{reward.name}</strong>
            </h3>
          </div>
          <div className='d-flex justify-content-center'>
            <img
              src={`http://localhost:5000/${reward.photo}`}
              style={{ maxHeight: '30rem' }}
              alt='reward'
            />
          </div>
          <div>
            {/* <Favorite
              userFrom={localStorage.getItem("userId")}
              recipeId={id}
              recipeInfo={recipe}
            /> */}
          </div>
          {/* info */}
          <div className='d-flex justify-content-center mt-4'>
            <h3>
              <strong>{recipe.description}</strong>
            </h3>
          </div>

          <div className='d-flex justify-content-center'>
            <h3 className='titleCategoria rounded'>
              <strong>{'Categoria de la receta'}</strong>
            </h3>
          </div>
          <div className='d-flex justify-content-center'>
            <h4>
              <strong>{reward.Category}</strong>
            </h4>
          </div>
          <div className='d-flex justify-content-center'>
            {
              <Link to='/' id='btnVolver'>
                <button className='mt-5 btn btn-info  text-white rounded h5'>
                  Volver
                </button>
              </Link>
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  rewards: state.rewards.items
})

export default connect(mapStateToProps, {
  fetchRewards
})(SingleReward)
