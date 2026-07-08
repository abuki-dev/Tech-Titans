let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

//generate replacer function
//it  cheks te currunt key and value
//if the currunt ket is equals with self ig ore or return undefined

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    console.log(key);
    return key != "" && value == meetup ? undefined : value;
  }),
);
