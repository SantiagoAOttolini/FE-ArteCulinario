import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterRewardsByCategory } from '../../../_actions/rewards_actions'

class Filter extends Component {
  render() {
    return (
      <div id='category-combobox-box'>
        <label className='tex-center'>
          <select
            className='form-control'
            id='category-combobox'
            value={this.props.Category}
            onChange={e =>
              this.props.filterRewardsByCategory(
                this.props.rewards,
                e.target.value
              )
            }
          >
            <option value=''>Elige una categoria</option>
            <option value='Bar'>Bar</option>
            <option value='Heladerias'>Heladerias</option>
            <option value='Restaurantes'>Restaurantes</option>
          </select>
        </label>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  rewards: state.Reward.items,
  filteredRecipes: state.Reward.filteredItems,
  Category: state.Reward.items.Category
})

export default connect(mapStateToProps, { filterRewardsByCategory })(Filter)
