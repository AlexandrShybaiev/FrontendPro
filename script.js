let ladder = {
  step: 0,

  up: function () { // підніматиме вас на одну сходинку
    this.step += 1;
    return this;
  },
  down: function () { // опускатиме вас на одну сходинку
    this.step -= 1;
    return this;

  },
  showStep: function () { // показує поточну сходинку
    console.log("Current step is " + this.step);
    return this;

  }
};


ladder.up().up().down().showStep();// 1