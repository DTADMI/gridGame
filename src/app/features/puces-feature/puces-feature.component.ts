import { Component, OnInit } from '@angular/core';

import { select } from '@angular-redux/store';
import { Subscription } from 'rxjs';

import { Niveau } from '../../core/models/niveau'
import { NIVEAU } from '../../mocks/mock-niveau';

import { NiveauService } from '../../core/niveau/niveau.service';

import * as niveauQueries from '../../store/niveau/niveau.queries';
import { NiveauActions } from '../../store/niveau/niveau.actions';

import { Puce } from '../../core/models/puce'
import { PUCES } from '../../mocks/mock-puces';

import { PuceService } from '../../core/puce/puce.service';

import * as puceQueries from '../../store/puce/puce.queries';
import { PuceActions } from '../../store/puce/puce.actions';



@Component({
	selector: 'app-puces',
	templateUrl: './puces.html',
	styleUrls: ['./puces.css']
})
export class PucesFeatureComponent implements OnInit {

	currentLevel: number = 1;

	@select(niveauQueries.generateNiveau) niveau: Niveau;

	

	constructor(
		private puceActions: PuceActions,
		private niveauActions: NiveauActions
		){}

	ngOnInit(){
		//this.puceActions.getPuces();
	}

	select = (puce: Puce) => {
		this.niveauActions.selectPuce(puce);
	}
}