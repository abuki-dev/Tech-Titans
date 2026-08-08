let myform = document.forms.testing; 
//form named testing accesed
Object.values(myform).forEach((element) => {
  //console.log(element);
});

//we can acces elemts by name also elements.name
let inputgae = myform.elements.age;
console.log(inputgae);
//weca warp back to the form from the elements aslo
//elemeys reference the form form also referece teh elements
console.log(inputgae.form)
//so this section tells us accesing form elements
