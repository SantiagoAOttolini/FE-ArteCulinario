import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Reward extends Component {
  render() {
    const reward = this.props.RReward;
    const rewardItems = (
      <div className="" key={reward._id}>
        <div className="d-flex justify-content-center rounded">
          <img
          className="rounded"
            src={`http://localhost:5000/${reward.photo}`}
            alt="photo"
            width="250"
            height="200"
          />
        </div>

        <div className="d-flex justify-content-center mt-3">
          <Link to={`/Reward/${reward._id}`}>
            <button className="btn btn-info  text-white rounded h5">
              Ver beneficios disponibles
            </button>
          </Link>
        </div>
      </div>
    );

    return <div>{rewardItems}</div>;
  }
}
