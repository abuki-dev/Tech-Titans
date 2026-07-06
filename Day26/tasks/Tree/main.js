let data = {
  Fish: {
    trout: {},
    salmon: {},
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

//creating element ul
//for each key create ul tehn appnd them right way
function createtree(objects) {
  if (!Object.keys(objects).length) return;
  let Ul = document.createElement("ul");
  for (const key in objects) {
    let li = document.createElement("li");
    li.textContent = key;
    let ChildUL = createtree(objects[key]);
    if (ChildUL) {
      li.append(ChildUL);
    }
    Ul.append(li);
  }
  return Ul;
}


    function createTree(obj) {
      document.body.append(createtree(data));
    }
createTree(data)