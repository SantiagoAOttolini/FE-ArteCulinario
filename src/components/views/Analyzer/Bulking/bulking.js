import React, { Component } from "react";
import Chart from "../Chart/chart";
import Highcharts from "highcharts";
import MiniChart from "../MiniChart/mini_chart";

class Bulking extends Component {
  render() {
    let foods = [
        {
          name: "Banana (118gr)",
          proteins: 1,
          carbohydrates: 27,
          fats: 0,
        },
        {
          name: "Manteca (14gr)",
          proteins: 0,
          carbohydrates: 0,
          fats: 11,
        },
        {
          name: "mantequilla de maní (32gr)",
          proteins: 8,
          carbohydrates: 6,
          fats: 16,
        },
        {
          name: "Nueces (28gr)",
          proteins: 4,
          carbohydrates: 4,
          fats: 18,
        },
        {
          name: "Chicken Breast (86gm)",
          proteins: 27,
          carbohydrates: 0,
          fats: 3,
        },
        {
          name: "Pechuga de pollo (195gr)",
          proteins: 5,
          carbohydrates: 45,
          fats: 2,
        },
      ],
      foodItems = foods.map((food, index) => {
        return (
          <div
            className="col-xs-12 col-sm-6 col-md-4 col-lg-3 go-eat-mini-chart thumbnail"
            key={index}
          >
            <MiniChart
              name={food.name}
              proteins={food.proteins}
              carbohydrates={food.carbohydrates}
              fats={food.fats}
            />
          </div>
        );
      });

    const options = {
      title: {
        text: "Calorias diarias ",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format:
              "<b>{point.name}</b><br/><div><center>{point.percentage:.1f} %</center></div>",
            style: {
              color:
                (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
                "black",
            },
          },
        },
      },
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      series: [
        {
          name: "Nutrients",
          colorByPoint: true,
          data: [
            {
              name: "Carbs",
              y: 40,
            },
            {
              name: "Proteinas",
              y: 40,
              sliced: true,
              selected: true,
            },
            {
              name: "Grasas",
              y: 16,
            },
            {
              name: "Vitaminas y minerales",
              y: 4,
            },
          ],
        },
      ],
    };
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-4 col-lg-6">
            <h3>Ingesta diaria (Ganar masa muscular)</h3>

            <p>
              Para ganar músculo, necesita consumir más calorías de las que usa.
              Y esto resultará en un aumento de grasa. Ahora bien, la cantidad
              de grasa que se gana depende de varios factores:
            </p>
            <p>
              si come a ciegas, sin saber un poco lo que está comiendo, entonces
              no consumirá suficiente comida o consumirá demasiado. Lo primero
              que debe hacer al planificar su dieta de volumen es encontrar su
              gasto calórico diario.
            </p>
            <br />
            <p>
              Tu <b>cantidad de calorias</b> es <b>{/* {calories} */}</b> y son
              las calorías que se debe proponer ingerir cada día en términos de
              ingesta calórica total.
            </p>
            <p>
              {" "}
              Tenemos nuestra ingesta total de calorías, de las cuales -{" "}
              <b>{/* {Math.ceil(0.17 * calories)} */}</b> - se utilizan para
              funciones normales y vitales, mientras que el resto -{" "}
              <b>{/* {Math.floor(0.83 * calories)} */}</b> - de las calorías se
              excretan o almacenan como grasa.
            </p>
            <br />
            <div style={{ fontSize: "1.2em", fontWeight: "bold" }}>
              CALORIAS POR COMIDA
            </div>
            <p>
              Uno de los diez mandamientos de un cuerpo sano es{" "}
              <em>" Comerás más de 3 comidas al día."</em>
              Así que supongamos que hacemos 7 comidas al día, recuerde que esto
              incluye batidos post entrenamiento.
              <b>
                {/* {" "}
                {calories} */}
                (calorías totales) / 7 (comidas al día) ={" "}
                {/* {Math.round(calories / 7)} */}
              </b>{" "}
              - Calorías por comida (aprox.).
            </p>
            <br></br>
            <h3>Alimentos recomendados por |Cocinarte|</h3>
          </div>
          <div className="col-xs-12 col-md-8 col-lg-6">
            <Chart options={options} />
          </div>
        </div>
        <div className="row well">{foodItems}</div>
      </div>
    );
  }
}

export default Bulking;
