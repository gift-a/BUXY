import template from "./bar-chart.html";
import Chart from "chart.js";

export class BarChartComponent {
  constructor(mountPoint, props) {
    this.mountPoint = mountPoint;
    this.props = props;
  }

  setDefaultValues(income, expence) {
    this.setIncome(income);
    this.setExpence(expence);
  }

  setIncome(value) {
    this.income = value;
  }

  setExpence(value) {
    this.expence = value;
  }

  querySelectors() {
    this.ctx = this.mountPoint.querySelector(".bar-chart");
  }

  initChart() {
    this.barChart = new Chart(this.ctx, {
      type: "bar",
      data: {
        labels: ["income", "expense"],
        datasets: [
          {
            label: "Amount",
            data: [this.income, this.expence],
            backgroundColor: ["rgba(0, 255, 0, 0.2)", "rgba(255, 0, 0, 0.2)"],
            borderColor: ["rgba(0, 255, 0, 1)", "rgba(255, 0, 0, 1)"],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  mount() {
    this.mountPoint.innerHTML = template();
    this.querySelectors();
    this.setDefaultValues(this.props.income, this.props.expence);
    this.initChart();
  }
}
