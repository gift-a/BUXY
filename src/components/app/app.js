import template from "./app.html";
import { BarChartComponent } from "../bar-chart/bar-chart";

export class AppComponent {
  constructor(mountPoint) {
    this.mountPoint = mountPoint;
  }

  querySelectors() {
    this.barChartPoint = this.mountPoint.querySelector(".app__bar-chart");
  }

  mountChildren() {
    this.barChart = new BarChartComponent(this.barChartPoint, {
      income: 5000,
      expence: 3000
    });
    this.barChart.mount();
  }

  mount() {
    this.mountPoint.innerHTML = template({ name: "Ihor" });
    this.querySelectors();
    this.mountChildren();
  }
}
