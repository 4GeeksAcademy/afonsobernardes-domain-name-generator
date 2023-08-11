/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["the", "our"];
const adjective = ["great", "big"];
const noun = ["jogger", "racoon", "pepe"];
const extensions = [".com", ".net", ".us", ".io", ".racoon", ".pe"];

function checkNameInExtensions(name, extensions) {
  if (extensions.includes(`.${name}`)) {
    domains += `${pron}${adj}.${name}<br>`;
  } else {
    extensions.forEach(ext => {
      domains += `${pron}${adj}${name}${ext}<br>`;
    });
  }
  return domains;
}

window.onload = function() {
  //write your code here
  let domains = "";
  pronoun.forEach(pron => {
    adjective.forEach(adj => {
      noun.forEach(name => {
        domains = checkNameInExtensions(name, extensions);
      });
    });
  });
  document.getElementById("domain").innerHTML = domains;
};
