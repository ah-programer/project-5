import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Encounter} from '../shared/models';
import { EncountersService} from '../shared/services/encounters.service';



@Component({
  moduleId: module.id,
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.css'],
  providers:[EncountersService]
})
export class EncountersComponent implements OnInit {
   public encounters: Encounter[];

  constructor(
    private router: Router,
    private encounterService: EncountersService
  ) { }

  ngOnInit() {
    this.encounterService.getEncounters().then( (result) => {
      this.encounters = result;
    });
  }

}
