import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Puce } from '../../core/models/puce';
import { Niveau } from '../../core/models/niveau';
import { Couleurs } from '../../core/models/couleur';

import { select } from '@angular-redux/store';
import { Subscription } from 'rxjs';

import { PUCES } from '../../mocks/mock-puces';

import { PuceService } from '../../core/puce/puce.service';

import * as puceQueries from '../../store/puce/puce.queries';
import { PuceActions } from '../../store/puce/puce.actions';

import { NiveauService } from '../../core/niveau/niveau.service';

import * as niveauQueries from '../../store/niveau/niveau.queries';
import { NiveauActions } from '../../store/niveau/niveau.actions';


@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent implements OnInit {

  
  @Input() niveau: Niveau;


  @Output()
  generate: EventEmitter<Niveau> = new EventEmitter();

  handleGenerate = () => {
    this.generate.emit(this.niveau);
  }
  

  @select(puceQueries.getPuces) puces: Puce[];

  constructor(
    private niveauActions: NiveauActions
    ){}

  ngOnInit(){
    this.niveauActions.generateNiveau(1);
  }

  select = (puce: Puce) => {
    this.niveauActions.selectPuce(puce);
  }

}
