import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Puce } from '../../core/models/puce';


@Component({
  selector: 'app-puce',
  templateUrl: './puce.component.html',
  styleUrls: ['./puce.component.css']
})
export class PuceComponent implements OnInit {

	@Input() puce: Puce;

	@Output()
	select: EventEmitter<Puce> = new EventEmitter();

	handleSelect = () => {
		this.select.emit(this.puce);
	}

  constructor() { }

  ngOnInit() {
  }

}
