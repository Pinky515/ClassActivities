// select the root node
const body = document.querySelector("body");
console.log(body);
// select the last child of the root node
const lastChild = body.lastElementChild;
const lastKid = document.getElementsByTagName("body")[0].lastElementChild;
console.log(lastChild);
console.log(lastKid);
// select all the children of the body element
const allChildren = document.getElementsByTagName("body").children;
const allKids = body.children;
console.log(allKids);
console.log(allChildren);
// select the next sibling of the h2 node
const h2Node = document.querySelector("h2");
console.log(h2Node);
const nextSiblingOfH2 = h2Node.nextElementSibling;
console.log(nextSiblingOfH2);
// select the parent element of the h1 node
const h1Node = document.querySelector("h1");
const h1Parent = h1Node.parentElement;
