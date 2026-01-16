// Fonction 1 : Le tir unique (Atomique et Testable)
// Cette fonction simule un tir au but pour une équipe.
// - tauxReussite : pourcentage de réussite du tireur (0-100)
// - randomValue : valeur aléatoire (0-100), injectée pour permettre des tests déterministes
// Retourne : le résultat du tir (TirResultat)
import type { TirResultat } from "./type";

export const tirerPenalty = (tauxReussite: number, randomValue: number): TirResultat => {
    // On considère randomValue sur 100 (0 inclus, 100 exclus)
    // 1. Si randomValue < tauxReussite : BUT
    if (randomValue < tauxReussite) {
        return "BUT";
    }
    // 2. Sinon, on répartit les autres issues de façon simple et claire :
    // Ici, on choisit :
    // - 10% pour "ARRET" (tauxReussite à tauxReussite+10)
    // - 10% pour "POTEAU" (tauxReussite+10 à tauxReussite+20)
    // - le reste pour "HORS_CADRE"
    if (randomValue < tauxReussite + 10) {
        return "ARRET";
    }
    if (randomValue < tauxReussite + 20) {
        return "POTEAU";
    }
    return "HORS_CADRE";
}