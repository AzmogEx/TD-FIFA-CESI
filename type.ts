export type TirResultat = "BUT" | "ARRET" | "POTEAU" | "HORS_CADRE";

export type Historique = {
  tour: number;
  equipe: string;
  resultat: TirResultat;
}[];