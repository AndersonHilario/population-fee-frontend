import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {StateRowListService} from './state-row-list.service';
import {State} from '../../model/state';

@Component({
  selector: 'app-state-row-list',
  templateUrl: 'state-row-list.component.html',
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class StateRowListComponent implements OnInit {
  states: State[] = [];

  constructor(private stateRowListService: StateRowListService) {
  }

  ngOnInit(): void {
    this.findStates();
  }

  deleteCity(cityId: string): void {
    this.stateRowListService.deleteCity(cityId).subscribe(res => {
      this.findStates();
    });
  }

  findStates(): void {
    this.stateRowListService.getStates().subscribe(states => {
      this.states = states;
    });
  }

}
