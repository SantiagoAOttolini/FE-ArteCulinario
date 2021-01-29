import React, { Component } from "react";
import RewardList from "../Rewards list/rewardList";
import Filter from "../Filter/filter";
import { connect } from "react-redux";
import { filterRewardsByCategory } from "../../../../_actions/rewards_actions";

class Catalog extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center mt-5">
          <h2>Catalogo de locales</h2>
        </div>
        <Filter></Filter>
        <RewardList />)
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rewards: state.Reward.items,
});

export default connect(mapStateToProps, {
  filterRewardsByCategory,
})(Catalog);
