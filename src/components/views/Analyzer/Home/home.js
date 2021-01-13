import React, { Component } from "react";
import quotesFn from "../Quote/quotes";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "male",
      height: 0,
      weight: 0,
      age: 0,
      showIncompleteWarning: false,
    };
    this.onDetailChange = this.onDetailChange.bind(this);
  }

  onDetailChange(detail, value) {
    let newState = this.state;
    newState[detail] =
      detail === "gender" ? value : value === "" ? 0 : parseInt(value, 10);
    this.setState(newState);
  }

  onCalculate() {
    let { gender, age, height, weight } = this.state,
      bmr = 0;
    if (age && height && weight) {
      if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      this.props.actions.initializeBmr(bmr);
    } else {
      this.setState({
        showIncompleteWarning: true,
      });
    }
  }

  handleRequestClose = () => {
    this.setState({
      showIncompleteWarning: false,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 go-eat-quote">
            <br />
            Vamos a calcular tu{" "}
            <a
              href="https://es.wikipedia.org/wiki/Metabolismo_basal"
              title="Basal metabolic rate"
            >
              metabolismo basal
            </a>{" "}
            y las calorias necesarias
          </div>
        </div>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-sm-3 col-md-4"></div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div>
              <div className="d-flex justify-content-center flex-column">
                <input
                  className="form-group"
                  hintText="160"
                  floatingLabelText="Altura (cm)"
                  type="number"
                  onChange={(e, value) => {
                    this.onDetailChange("height", value);
                  }}
                />
                <input
                  hintText="70"
                  floatingLabelText="Peso (kgs)"
                  type="number"
                  onChange={(e, value) => {
                    this.onDetailChange("weight", value);
                  }}
                />
                <input
                  hintText="18"
                  floatingLabelText="Edad"
                  type="number"
                  onChange={(e, value) => {
                    this.onDetailChange("age", value);
                  }}
                />
              </div>
              <div>Seleccione Genero: </div>
              <br />
              <div
                name="Genero"
                defaultSelected="Male"
                onChange={(e, value) => {
                  this.onDetailChange("gender", value);
                }}
              >
                <input
                  type="radio"
                  value="Male"
                  label="Hombre"
                  style={{ color: "#C62828", padding: "5px" }}
                />
                <input
                  type="radio"
                  value="female"
                  label="Mujer"
                  style={{ color: "#C62828", padding: "5px" }}
                />
              </div>
              <div>
                <center>
                  <button
                    label="Calcular"
                    primary={true}
                    onClick={this.onCalculate.bind(this)}
                  />
                </center>
              </div>
            </div>
            {/*  <Snackbar
              open={this.state.showIncompleteWarning}
              message="Please fill all the details"
              autoHideDuration={2000}
              onRequestClose={this.handleRequestClose}
            /> */}
          </div>
          <div className="col-sm-3 col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-xs-12 go-eat-quote">
            <br />
            <br />
            {quotesFn()}
          </div>
        </div>
      </div>
    );
  }
}

export default home;
