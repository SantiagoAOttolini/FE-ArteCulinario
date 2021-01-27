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
        <div className=''>
          {/* title */}
          <div id='rowTitle'></div>
          <br></br>
          <br></br>
          {/* end of title */}
          <div>
            {this.props.rewards &&
              this.props.rewards.map(reward => (
                <Reward key={reward._id} RReward={reward} />
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
