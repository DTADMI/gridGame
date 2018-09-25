import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Puce } from '../models/puce';
import { PUCES } from '../../mocks/mock-puces';

@Injectable({
	providedIn: 'root'
})
export class PuceService {

	constructor(){}

	getPuces = (): Observable<Puce[]> => {
		return of (PUCES);
	}

	generateFullPuce = (couleur: string, couleurOn: string): Puce => {
		let puce: Puce;
		puce.found=false;
		puce.full=true;
		puce.couleurOff='grey';
		puce.couleur=couleur;
		puce.couleurOn=couleurOn;
		return puce;
	}

	generateEmptyPuce = (): Puce => {
		let emptyPuce: Puce;
		emptyPuce.found=false;
        emptyPuce.full=false;
		return emptyPuce;
	}
	
/*
	constructor(private http: HttpClient) {}

	getPuces = (): Observable<Puce[]> => {
		return this.http.get<Puce[]>('http://localhost:9000/puces');
	}
*/
}