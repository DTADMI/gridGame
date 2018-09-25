import { Puce } from './puce';

export interface Niveau {
  puces: Puce[];
  level: number;
  nombreMaxPuces: number;
  nombrePucesACliquer: number;
  couleurRecherchee: string;
  pret?: boolean;
  hauteur: number;
  largeur: number;
  size: number;

  tableau: Puce[][];
}

