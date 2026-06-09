let Character = {
  name: "Player1",
  level: 1,
};

function Update_Level(Player) {
  if ("level" in Player) {
    Player.level += 1;
  } else {
    return;
  }
}

function Create_Weapon(Player, weapon_type) {
  Player.weapon = weapon_type;
}

function Rmove_property(Player, property) {
  if ([property] in Player) {
    delete Player[property];
  } else {
    console.log("tehre is no such key");
  }
}

function Add_New_property(Player, Property, Value) {
  if ([Property] in Player) {
    return;
  } else {
    Player[Property] = Value;
  }
}

Create_Weapon(Character, "Woden sword");

Update_Level(Character);

let Cloned_Charachter = Object.assign({}, Character);

Add_New_property(Cloned_Charachter, "buff", "Double Damage");
Rmove_property(Cloned_Charachter, "weapon");
console.log(Character);
console.log(Cloned_Charachter);
let Final_clone = { ...Cloned_Charachter };
console.log(Final_clone);
