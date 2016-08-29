import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Encounter, IAlien} from '../shared/models';
import {EncountersService} from '../shared/services/encounters.service';
import {AlienService} from '../shared/services/alien.service';


@Component({
  moduleId: module.id,
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.css'],
  providers: [EncountersService, AlienService]
})
export class ReportComponent implements OnInit {
  NO_ALIEN_SELECTED  ='(none)';
 SERVER_ERROR;

 public aliens: IAlien[];
 public encounter: Encounter;
  constructor(
    private router: Router,
    private alienService: AlienService,
    private encounterService: EncountersService

  ) {


  }

  ngOnInit() {
    this.encounter = new Encounter(this.NO_ALIEN_SELECTED, 'TODAY', '', '444');
    this.alienService.getAliens().then(alien => this.aliens = alien);
  }
  onSubmit() {
    this.encounterService.newEncounter(this.encounter).then( (result) => {
      this.router.navigate(['/encounters']);

  }).catch(error => {
    this.SERVER_ERROR = 'There was an error processing the colonist.';
  });

}
}
