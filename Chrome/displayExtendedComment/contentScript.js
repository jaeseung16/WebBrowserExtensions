var outercontainer = document.querySelector(".comment");
var container = document.querySelector(".comment-form");
var matched = container.querySelector(".text");
var newUl = document.createElement("ul");
outercontainer.appendChild(newUl);

matched.addEventListener('input', function (e) {
  var value = e.target.value;
  if (value.length > 50) {
    let newChild = document.createTextNode(value);
    let children = newUl.childNodes;
    if (children.length === 0) {
      newUl.appendChild(newChild);
    } else {
      let oldChild = newUl.firstChild;
      newUl.replaceChild(newChild, oldChild);
    }
  } else {
    let children = newUl.childNodes;
    if (children.length > 0) {
      newUl.firstChild.remove();
    }
  }
});
