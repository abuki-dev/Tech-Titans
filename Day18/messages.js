let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];
messages.splice(1, 1);
console.log(messages);
module.exports = messages;
