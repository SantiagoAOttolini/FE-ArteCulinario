import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGyms } from "../../../../_actions/gym_actions";
import Gym from "../Gym/gym";

class GymList extends Component {
  componentDidMount() {
    this.props.fetchGyms();
  }

  render() {
    const GymListConst = () => (
      <div className="mr-5 ml-5 containerImg">
        <div className="mt-4 d-flex justify-content-center">
          <h3 className="titleDelete mt-2 text-center rounded mb-2">
            Gimnacios
          </h3>
        </div>
        <div className="rowBenefit">
          {this.props.gyms &&
            this.props.gyms.map((gym) => <Gym key={gym._id} Gym={gym} />)}
        </div>
      </div>
    );
    return <GymListConst />;
  }
}

const mapStateToProps = (state) => ({
  gyms: state.Gym.items,
});

export default connect(mapStateToProps, {
  fetchGyms,
})(GymList);
