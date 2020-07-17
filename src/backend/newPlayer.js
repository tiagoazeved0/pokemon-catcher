export class Player {
  constructor() {
    this.currentPosition = { x: 0, y: 0 };
    this.housesVisited = [];
    this.counter = 0;
    this.answer = "";
  }

  userInput() {
    this.answer = prompt(
      "Welcome to Pokemon Catcher, type here your movement sequence:");

      if (this.answer == null) {
        return false;
      }
      this.answer = this.answer.toUpperCase();
      return true;
      }

  validateInput() {

    const regEX = new RegExp("^[N|S|W|E]+$");
    let validation = regEX.test(this.answer);
  
    if (!validation) {
      alert("Characters not allowed  - Only N, S, W, E allowed");
      document.getElementById("test").innerHTML = "Input error, please try again";
      this.userInput();
      this.validateInput();
    } else {
      document.getElementById("test").innerHTML =
        "Your move sequence is: " + this.answer;
    }
  }
}
