import template from "./app.html";

export class AppComponent {
  constructor(mountPoint) {
    this.mountPoint = mountPoint;
  }

  handleFileImport(evt) {
    console.log(this.fileInput.files[0]);
    const fr = new FileReader();

    fr.addEventListener("load", this.handleFileLoaded.bind(this));
    fr.readAsText(this.fileInput.files[0]);
  }

  handleFileLoaded(info) {
    console.log(info);
    this.mountPoint.innerHTML += info.target.result
      .toString()
      .replace(/\n/g, "<br>");
  }

  querySelectors() {
    this.fileInput = this.mountPoint.querySelector("#file");
  }

  addEventListeners() {
    this.fileInput.addEventListener("change", this.handleFileImport.bind(this));
  }

  mount() {
    this.mountPoint.innerHTML = template({ name: "Ihor" });
    this.querySelectors();
    this.addEventListeners();
  }
}
