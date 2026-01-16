

import { tirerPenalty } from "./penalty"
import type { TirResultat, Historique, EquipeConfig } from "./type";

// Configurations des équipes
const configEquipeA: EquipeConfig = { nom: "Equipe A", tauxReussite: 75 }
const configEquipeB: EquipeConfig = { nom: "Equipe B", tauxReussite: 70 }



// Type pour le résultat des tirs
type ResultatSeance = {
    historique: Historique;
    scoreA: number;
    scoreB: number;
    vainqueur: string | null;
};

// Fonction principale pour simuler une séance de tir au but entre deux équipe
export const simulerSeance = (
    configEquipeA: EquipeConfig,
    configEquipeB: EquipeConfig,
    randomValuesA?: number[],
    randomValuesB?: number[]
): ResultatSeance => {

    let historique: Historique = [];

    // Init des scores 
    let scoreA = 0;
    let scoreB = 0;


    function victoireMathematique(scoreA: number, scoreB: number, tirsRestants: number): boolean {
        return scoreA > scoreB + tirsRestants || scoreB > scoreA + tirsRestants;
    }

    for(let compteur = 0; compteur < 5; compteur++) {
        // Utilisation des randomValues injectés si présents, sinon Math.random() * 100
        const randomA = (randomValuesA && randomValuesA[compteur] !== undefined)
            ? randomValuesA[compteur]!
            : Math.random() * 100;
        const randomB = (randomValuesB && randomValuesB[compteur] !== undefined)
            ? randomValuesB[compteur]!
            : Math.random() * 100;

        // Simule le tir de l'équipe A
        const resultatA = tirerPenalty(configEquipeA.tauxReussite, randomA);
        historique.push({
            tour: compteur + 1,
            equipe: configEquipeA.nom,
            resultat: resultatA
        });
        if(resultatA === "BUT") {
            scoreA++;
        }

        // Simule le tir de l'équipe B
        const resultatB = tirerPenalty(configEquipeB.tauxReussite, randomB);
        historique.push({
            tour: compteur + 1,
            equipe: configEquipeB.nom,
            resultat: resultatB
        });
        if(resultatB === "BUT") {
            scoreB++;
        }

        // Vérifie la victoire après chaque tir
        if (victoireMathematique(scoreA, scoreB, 5 - compteur)) {
            break;
        }
    }

    // Calcul du vainqueur (ou null en cas d'égalité)
    let vainqueur: string | null = null;
    if (scoreA > scoreB) vainqueur = configEquipeA.nom;
    else if (scoreB > scoreA) vainqueur = configEquipeB.nom;

    // Retourne l'historique, les scores et le vainqueur
    return { historique, scoreA, scoreB, vainqueur };
}


// Affichage 
console.log(simulerSeance(configEquipeA, configEquipeB));