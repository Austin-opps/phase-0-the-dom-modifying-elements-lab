// Write your code here!
const mainElement = document.getElementById("main");
mainElement.remove();
const newHeader = document.createElement("h1");
newHeader.id="victory";
const newHeaderText = document.createTextNode("Austin is the champion");
newHeader.appendChild(newHeaderText);

