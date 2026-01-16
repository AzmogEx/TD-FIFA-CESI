export const simulerSeance = (configEquipeA, configEquipeB) => {

    for(let compteur = 0; compteur < 5; compteur++) {
        tirerPenalty(configEquipeA.tauxReussite, Math.random() * 100);
        tirerPenalty(configEquipeB.tauxReussite, Math.random() * 100);

        // Stocker dans l'historique 
        // Vérifier si victoire mathématique 
        // Retourner le résultat final
    }

}
