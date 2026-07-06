if (document.getElementById("part1")) {
  //moucse events discutions
  //click,context menu mouseover/mouseout,mousedoin/up ,mousemoe
  //KEYBOARD keydown/keyup
  //form and eelements /submit foucs
  elem.onclick = displaymyname;
  function displaymyname() {
    alert("hellow abuki");
  }
  function dsplay() {
    alert("mose is up");
  }
  function dislpaluyagan() {
    alert("mose is out");
  }
  elem.addEventListener("mouseout", dislpaluyagan);
  elem.addEventListener("mouseup", dsplay);
  mytag.onclick = function (event) {
    // show event type, element and coordinates of the click
    alert(event.type + " at " + event.currentTarget);
    alert("Coordinates: " + event.clientX + ":" + event.clientY);
  };
  hidemen.addEventListener("click", hideme);
  function hideme() {
    this.hidden = true;
  }
}
if (document.getElementById("part2")) {
  function childhello() {
    alert("hellow im the child am gonnna tell my father about you ");
  }
  function fadahellow() {
    alert("hellow im : The " + `${this.getAttribute("name")}`);
  }

  function gphellow() {
    alert(`i"m ${this.getAttribute("name")} I have Money`);
  }
  gp.addEventListener("click", gphellow);
  let ab = document.getElementById("fada");
  ab.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
  });
  click.addEventListener("click", childhello);
}
