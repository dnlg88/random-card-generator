/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numeros = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let random1 = Math.floor(Math.random() * 12);
  let random2 = Math.floor(Math.random() * 3);
  let simbolo = ["♦", "♥", "♠", "♣"];

  let pinta = document.querySelectorAll(".pinta");
  for (let i = 0; i < pinta.length; i++) {
    pinta[i].innerText = simbolo[random2];
  }
  if (pinta[0].innerText == "♦" || pinta[0].innerText == "♥") {
    for (let i = 0; i < pinta.length; i++) {
      pinta[i].style.color = "red";
    }
  }
  let numero = document.querySelectorAll(".numero");
  for (let i = 0; i < numero.length; i++) {
    numero[i].innerText = numeros[random1];
  }
};
