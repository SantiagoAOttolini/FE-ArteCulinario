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
      <div className="">
        <div className="">
          <div className="mt-5 d-flex justify-content-center">
            <h4>Vamos a calcular tu </h4>
            <p className="invisible">h</p>
            <a
              href="https://es.wikipedia.org/wiki/Metabolismo_basal"
              title="Basal metabolic rate"
            >
              <h4 className="text-primary"> metabolismo basal</h4>
            </a>{" "}
            <p className="invisible">h</p>
            <h4>y las calorias necesarias</h4>
          </div>
        </div>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-sm-3 col-md-4"></div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div>
              <div className="mt-5 form-control d-flex justify-content-center flex-column">
                <input
                  className="mt-5 mb-5 form-control form-control-lg"
                  type="text"
                  placeholder="Altura"
                  onChange={(e, value) => {
                    this.onDetailChange("height", value);
                  }}
                />
                <input
                  className="mb-5 form-control form-control-lg"
                  type="text"
                  placeholder="Peso"
                  onChange={(e, value) => {
                    this.onDetailChange("weight", value);
                  }}
                />
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Edad"
                  onChange={(e, value) => {
                    this.onDetailChange("age", value);
                  }}
                />

                <div
                  name="Genero"
                  defaultSelected="Male"
                  onChange={(e, value) => {
                    this.onDetailChange("gender", value);
                  }}
                ></div>

                <div className="mt-4 mb-4  d-flex justify-content-center">
                  <div class="mr-4 form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      Hombre
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="option2"
                    />
                    <label class="form-check-label" for="exampleRadios2">
                      Mujer
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="mt-5 btn btn-info"
                  primary={true}
                  onClick={this.onCalculate.bind(this)}
                >
                  Calcular
                </button>
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
        <div className="mt-5 d-flex justify-content-center">
          <div className="col-xs-12 go-eat-quote"><h5>{quotesFn()}</h5></div>
        </div>
      </div>
    );
  }
}

export default home;
