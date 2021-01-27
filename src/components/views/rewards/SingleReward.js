import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchRewards } from "../../../_actions/rewards_actions";
import "./style.css";
class SingleReward extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      reward: {},
      id,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      await this.props.fetchRewards();
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate() {
    if (!this.state.reward.name && this.props.rewards) {
      const detailReward = this.props.rewards.find(
        (x) => x._id.toString() === this.state.id.toString()
      );

      if (detailReward) {
        this.setState({
          reward: detailReward,
          loading: false,
        });
      }
    }
  }

  render() {
    const reward = this.state.reward;
    const id = this.state.reward.id;
    console.log(id);

    if (this.state.loading) {
      return (
        <div>
          <div>
            <div className="d-flex justify-content-center">
              <h2>Cargando Receta...</h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="container mt-3">
          <div className="d-flex justify-content-center">
            <h4 className="titleBenefits text-center rounded mt-3">{reward.name}</h4>
          </div>
          <div className="d-flex justify-content-center">
            <img
              src={`http://localhost:5000/${reward.photo}`}
              style={{ maxHeight: "30rem" }}
              alt="reward"
            />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <h3>
              <strong>{reward.description}</strong>
            </h3>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <h4 className="text-center rounded titleAtributtes">Direccion</h4>
          </div>
          <div className="d-flex justify-content-center">
            <h5>{reward.Location}</h5>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <h4 className="text-center rounded titleAtributtes">Horario de atencion</h4>
          </div>
          <div className="d-flex justify-content-center">
            <h5>{reward.HoursOfAtention}</h5>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <h4 className="text-center rounded titleCategoria">
              Categoria de la receta
            </h4>
          </div>
          <div className="d-flex justify-content-center">
            <h4>
              <strong>{reward.Category}</strong>
            </h4>
          </div>
          <div className="d-flex justify-content-center">
            {
              <Link to="/benefits">
                <button className="mt-5 btn btn-info  text-white rounded h5">
                  Obtener Beneficios
                </button>
              </Link>
            }
          </div>
          <div className="d-flex justify-content-center">
            {
              <Link to="/" id="btnVolver">
                <button className="btn btn-info  text-white rounded h5">
                  Volver
                </button>
              </Link>
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rewards: state.Reward.items,
});

export default connect(mapStateToProps, {
  fetchRewards,
})(SingleReward);
