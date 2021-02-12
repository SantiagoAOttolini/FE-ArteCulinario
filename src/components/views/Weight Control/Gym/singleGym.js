import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchGyms } from "../../../../_actions/gym_actions";


class SingleGym extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      gym: {},
      id,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      await this.props.fetchGyms();
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate() {
    if (!this.state.gym.name && this.props.gyms) {
      const detailGym = this.props.gyms.find(
        (x) => x._id.toString() === this.state.id.toString()
      );

      if (detailGym) {
        this.setState({
          gym: detailGym,
          loading: false,
        });
      }
    }
  }

  render() {
    const LoadingGyms = () => (
      <div className="d-flex justify-content-center">
        <h2>Cargando gimnasios...</h2>
      </div>
    );
    const GymsInformations = () => (
      <div className="container mt-3">
        <div className="d-flex justify-content-center">
          <h4 className="titleBenefits text-center rounded mt-3">{gym.name}</h4>
        </div>
        <div className="d-flex justify-content-center">
          <img
            src={`http://localhost:5000/${gym.photo}`}
            style={{ maxHeight: "30rem" }}
            alt="gym"
          />
        </div>
        <div className="d-flex justify-content-center mt-2">
          <h4 className="text-center rounded titleAtributtes">Telefono</h4>
        </div>
        <div className="d-flex justify-content-center">
          <h5>{gym.phone}</h5>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <h4 className="text-center rounded titleAtributtes">Mail</h4>
        </div>
        <div className="d-flex justify-content-center">
          <h5>{gym.email}</h5>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <h4 className="text-center rounded titleAtributtes">Direccion</h4>
        </div>
        <div className="d-flex justify-content-center">
          <h5>{gym.adress}</h5>
        </div>

        <div className="mt-5 d-flex justify-content-center">
          <h4>¿Te gustaria arrancar a entrenar desde ahora?</h4>
        </div>
        <div className="d-flex justify-content-center">
          <button>Cotizar promocion</button>
        </div>

        <div className="d-flex justify-content-center">
          {
            <Link to="/" id="btnVolver">
              <button className="mt-5 btn btn-info  text-white rounded h5">
                Volver
              </button>
            </Link>
          }
        </div>
      </div>
    );
    const gym = this.state.gym;
    if (this.state.loading) {
      return <LoadingGyms />;
    }
    return <GymsInformations />;
  }
}

const mapStateToProps = (state) => ({
  gyms: state.Gym.items,
});

export default connect(mapStateToProps, {
  fetchGyms,
})(SingleGym);
