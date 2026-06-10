let Leader = {
  steps: 0,
  Step_up() {
    this.steps++;
    return this;
  },
  down() {
    this.steps--;
    return this;
  },
  Show_steps() {
    console.log(`curruntly spets are ${this.steps}`);
    return this;
  },
  Get_steps() {
    return this.steps;
  },
};
module.exports = Leader;
