import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRewards } from '../../../_actions/rewards_actions'
import Reward from './Reward'

class RewardList extends Component {
  componentDidMount() {
    this.props.fetchRewards()
  }
  render() {
    return (
      <>
        <div className='container py-5'>
          {/* title */}
          <div id='rowTitle'></div>
          <br></br>
          <br></br>
          {/* end of title */}
          <div id='rowRecipes'>
            {this.props.reward &&
              this.props.reward.map(reward => (
                <Reward key={reward.reward._id} reward={reward} />
              ))}
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  rewards: state.Reward.filteredItems
})

export default connect(mapStateToProps, {
  fetchRewards
})(RewardList)
