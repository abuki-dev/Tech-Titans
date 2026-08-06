//the change Evenet tell s use when somting is finihed doing it or looses focus
//whenon chek box after addinfg new va;u like after toggeleing it or chanfing the value

//! do evnet chage alerts on the input and chake boxes

//? Evenet input
// after modifined bybhe user
//the arrow keys donot have vales that triger the input

//? Event cut copy & paste

//todo
//get the from element
//on inouts add input events
//on chekboxs add chagne event
//on text area add paste and copy

let myform = document.forms.change;

//when chaged the value alerted
myform.age.addEventListener("change", () => {
  alert(myform.age.value);
});
//attach fir each chenkbox event change
myform.departnment.forEach((element) => {
  element.addEventListener("change", (event) => {
    event.preventDefault();
    console.log(event.target.checked);
  });
});

//on inpu chnage teh value o fth text text area provided
myform.name.addEventListener("input", (event) => {
  if (event.data == null)
    return (myform.more.value = myform.more.value.slice(0, -1));
  myform.more.value += event.data;
});

// on cut and on copy doe event preventd from working 
myform.more.addEventListener("cut", (event) => {
  console.log(
    document.getSelection(),
    event.clipboardData.getData("text/plain"),
  );
  event.preventDefault();
});
myform.more.addEventListener("paste", (event) => {
  console.log(event.clipboardData.getData("text/plain"));
  event.preventDefault();
});
