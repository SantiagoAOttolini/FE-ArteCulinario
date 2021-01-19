import React, { Component } from 'react'
import RewardList from './RewardList'
import Filter from './Filter'
import { connect } from 'react-redux'
import { filterRecipesByCategory } from '../../../_actions/recipe_actions'

class Catalog extends Component {
  render() {
    return (
      <>
        <h1 id='text-Category'>Catalogo de locales</h1>
        <RewardList />
        )}
      </>
    )
  }
}

const mapStateToProps = state => ({
  Rewards: state.Reward.items
})

export default connect(mapStateToProps, {
  filterRecipesByCategory
})(Catalog)
