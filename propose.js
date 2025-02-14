let x = 0; // Position horizontale
let y = 0; // Position verticale

// Récupération de l'élément à déplacer
const coeur = document.querySelector(".heart-container");

function deplacer(event) {
    if (!coeur) return; // Vérifier si l'élément existe

    const step = 10; // Distance de déplacement en pixels

    // Gestion des touches ZQSD
    switch (event.key.toLowerCase()) {
        case "z": // Haut
            y -= step;
            break;
        case "s": // Bas
            y += step;
            break;
        case "q": // Gauche
            x -= step;
            break;
        case "d": // Droite
            x += step;
            break;
        default:
            return; // Sortir si ce n'est pas une touche ZQSD
    }

    // Appliquer la nouvelle position
    coeur.style.transform = `translate(${x}px, ${y}px)`;
   

}

//  function battre(){
   

// // Ajout de l'écouteur d'événement sur les touches du clavier
// document.addEventListener("keypress", deplacer);

coeur.style.animationDuration = "750ms"; 
