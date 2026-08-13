let human = {
  speakes() {
    this.language = "amharic";
  },
};
let abuki = {
  __proto__: human,
};
abuki.speakes();
console.log(human);
