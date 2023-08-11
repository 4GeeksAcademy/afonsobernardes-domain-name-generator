/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["the", "our"];
const adjective = ["great", "big"];
const noun = ["jogger", "racoon"];
const extensions = [".com", ".net", ".us", ".io"];

window.onload = function() {
  //write your code here
  let domains = "";
  pronoun.forEach(pron => {
    adjective.forEach(adj => {
      noun.forEach(name => {
        extensions.forEach(ext => {
          domains += `${pron}${adj}${name}${ext}<br>`;
        });
      });
    });
  });
  document.getElementById("domain").innerHTML = domains;
};
