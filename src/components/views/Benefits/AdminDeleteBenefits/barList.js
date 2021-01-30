import React, { Component } from "react";
import Bar from "./bar";
import { connect } from "react-redux";
import { fetchRewards } from "../../../../_actions/rewards_actions";
import "./style.css";

class barList extends Component {
  componentDidMount() {
    this.props.fetchRewards();
  }
  render() {
    return (
      <>
        <div className="mt-5 d-flex justify-content-center">
          <h3 className="titleDelete rounded text-center">Borrar locales</h3>
        </div>
        <div className="containerImg container py-5">
          <div className="rowReward">
            {this.props.rewards &&
              this.props.rewards.map((reward) => (
                <Bar key={reward._id} reward={reward} />
              ))}
          </div>
        </div>
        
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  rewards: state.Reward.items,
});

export default connect(mapStateToProps, {
  fetchRewards,
})(barList);
