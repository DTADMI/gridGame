import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Puce } from '../models/puce';
import { PuceService } from '../puce/puce.service';
import { Niveau } from '../models/niveau';
import { NIVEAU } from '../../mocks/mock-niveau';

import { Couleurs } from '../models/couleur';

@Injectable({
	providedIn: 'root'
})
export class NiveauService {

	constructor(private puceService: PuceService){}

	getNiveau = (level: number): Observable<Niveau> => {
		//return of (NIVEAU);
		return of (this.creerNiveau(level));
	}

	isJeuTermine(niveau: Niveau): boolean {
		for(var i = 0;i<niveau.puces.length;i++) {
		   if(niveau.couleurRecherchee===niveau.puces[i].couleurOn && !niveau.puces[i].found) {
		      return false;
		   }
		}
		return true;
	}

	reset(niveau: Niveau): void {
		niveau.pret = false;
	}

	private generateRandomNumber(min: number, max: number) {
	    // Returns a random integer between min (include) and max (include)
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	  }

	private creerNiveau(level: number): Niveau {

	  	var niveau : Niveau;
	    niveau.hauteur = 50;
	    niveau.largeur = 50;

	    niveau.size=10;

	    niveau.level = (level < 1 ? 1 : (level > 10 ? 10 : level));
	    niveau.nombreMaxPuces = (level*(level-1))+1;
	    niveau.nombrePucesACliquer = niveau.level;

	    let generatedRandomNumber: number = this.generateRandomNumber(0, Couleurs.length-1);
	    niveau.couleurRecherchee = Couleurs[generatedRandomNumber] != 'grey' ? Couleurs[generatedRandomNumber] : Couleurs[generatedRandomNumber - this.generateRandomNumber(1, 3)];

	    niveau.puces = [];
	    niveau.tableau = new Array(niveau.size); //size*size??
	    let indexPuces = 0;

	    for(var i = 0;i<niveau.size;i++) {
	      niveau.tableau[i] = [];
	      for(var j=0;j<niveau.size;j++){
	       let emptyPuce: Puce = this.puceService.generateEmptyPuce();
	        niveau.tableau[i][j] = emptyPuce;
	        niveau.tableau[i][j].id=parseInt(i+""+j);
	      }
	    }

	    this.buildFullPuces(niveau);
	    do{
	      let generatedIndexRow: number = this.generateRandomNumber(0, niveau.size-1);
	      let generatedIndexColumn: number = this.generateRandomNumber(0, niveau.size-1);
	      niveau.tableau[generatedIndexRow][generatedIndexColumn] = niveau.puces[indexPuces];
	      niveau.tableau[generatedIndexRow][generatedIndexColumn].id=parseInt(generatedIndexRow+""+generatedIndexColumn)
	      indexPuces++;
	    } while (indexPuces!=niveau.puces.length);

	    niveau.pret = true;

	    return niveau;
	  }

	private buildFullPuces(niveau: Niveau): void{

	    for(var i=0; i<niveau.nombrePucesACliquer; i++){
	      let puce: Puce = this.puceService.generateFullPuce(niveau.couleurRecherchee, niveau.couleurRecherchee);
	      puce.found=false;
	      puce.full=true;
	      puce.couleurOff='grey';
	      puce.couleur=niveau.couleurRecherchee;
	      puce.couleurOn=niveau.couleurRecherchee;
	      niveau.puces.push(puce);
	    }
	    for(var i=niveau.nombrePucesACliquer; i<niveau.nombreMaxPuces; i++){
	      let randomIndexColor: number = this.generateRandomNumber(0, Couleurs.length-1);
	      let couleur: string = Couleurs[randomIndexColor] == niveau.couleurRecherchee ? Couleurs[randomIndexColor + 1 <
	      Couleurs.length ? randomIndexColor + 1 : randomIndexColor -1] : Couleurs[randomIndexColor];
	      let puce: Puce = this.puceService.generateFullPuce(couleur, couleur);
	      niveau.puces.push(puce);
	    }
	  }
	
/*
	constructor(private http: HttpClient) {}

	getPuces = (): Observable<Puce[]> => {
		return this.http.get<Puce[]>('http://localhost:9000/puces');
	}
*/
}