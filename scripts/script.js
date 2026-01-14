let countEl = document.getElementById("count-el");

let calinBtn = document.getElementById("calin-btn");
let histoireBtn = document.getElementById("histoire-btn");
let repasBtn = document.getElementById("repas-btn");
let calmeBtn = document.getElementById("calme-btn");
let resetBtn = document.getElementById("reset-btn")
let recapMsg = document.getElementById("recap-msg");
let count = 0;

// ===== CORRECTION ET REFACTORISATION =====

// Créer un tableau contenant tous les boutons pour éviter la répétition
const buttons = [calinBtn, histoireBtn, repasBtn, calmeBtn];

// Initialiser le message d'accueil avant que l'utilisateur clique
// Cela affiche "Aucun moment créé pour le moment" dès le chargement de la page

recapMsg.textContent = `Aucun moment crée pour le moment`;

// Parcourir chaque bouton du tableau et ajouter un écouteur d'événement
buttons.forEach((button) => {
  // Ajouter un événement "click" à chaque bouton
  button.addEventListener("click", function () {
    // Augmenter le compteur de 1 à chaque clic
    count += 1;
    
    // Afficher le nouveau nombre dans l'élément HTML du compteur
    countEl.textContent = count;

    // Vérifier si au moins 1 moment a été créé
    if (count > 0) {
      // Afficher un message personnalisé avec gestion du singulier/pluriel
      // Si count > 1 : afficher "beaux moments" (avec 'x' et 's')
      // Si count = 1 : afficher "beau moment" (sans 'x' ni 's')
      recapMsg.textContent = `Tu as créé ${count} beau${
        count > 1 ? "x" : ""} moment${count > 1 ? "s" : ""} aujourd'hui.`;
    }
  });
});

resetBtn.addEventListener("click", function(){
  count = 0;
  countEl.textContent = count

  recapMsg.textContent = `Aucun moment crée pour le moment`;
})
