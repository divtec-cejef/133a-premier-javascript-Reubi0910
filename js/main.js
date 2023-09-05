/**
 * Mon premier JS
 * @author  Reubi Nava
 * @version 0.0.1
 * @since   2023-08-29
 */

"use strict";

// Récupérer tous les paragraphes du document, le bouton ajouter

let tabPara = document.querySelectorAll("p");
let btAjouter = document.querySelector("button.ajouter");
let txtArticle = document.querySelector("#article");
let ulArticles = document.querySelector("ul.articles");

// Affiche le contenu des variables dans la console

console.log(tabPara,btAjouter,txtArticle);

// Écoute le click sur le bouton ajouter

btAjouter.addEventListener("click", () => {
    ulArticles.innerHTML += "<li>" + txtArticle.value + "</li>";
    txtArticle.value = "";
});


let age = prompt("Quel est ton âge ?");

age = parseInt(age);
// alert("Tu as " + age + " ans");
if(isNaN(age)) {
    alert(`Entre un nombre !`);
} else {
    alert(`Tu ${age + 10} ans`);
}