
// TirResultat : Enumération des issues possibles d'un tir au but
// - "BUT" : le tir est réussi
// - "ARRET" : le gardien arrête le tir
// - "POTEAU" : le ballon touche le poteau
// - "HORS_CADRE" : le tir est hors du cadre
export type TirResultat = "BUT" | "ARRET" | "POTEAU" | "HORS_CADRE";


// Historique : Tableau d'objets représentant chaque tir effectué pendant la séance
// - tour : numéro du tour (1 à 5 ou plus si prolongation)
// - equipe : nom de l'équipe qui tire
// - resultat : issue du tir (TirResultat)
export type Historique = {
  tour: number;
  equipe: string;
  resultat: TirResultat;
}[];


// EquipeConfig : Structure de configuration d'une équipe pour la séance
// - nom : nom de l'équipe
// - tauxReussite : pourcentage de réussite aux tirs (0-100)
export interface EquipeConfig {
  nom: string;
  tauxReussite: number;
}