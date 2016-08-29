import { Component } from '@angular/core';
import { AlienService } from './shared/services/alien.service';
import { OccupationService } from './shared/services/Job.service';
import { ColonistsService } from './shared/services/Colonists.service';
import { EncountersService } from './shared/services/Encounters.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [AlienService, OccupationService, ColonistsService, EncountersService]
})
export class AppComponent {

  constructor(alienService: AlienService, occupationService: OccupationService, ColonistsService: ColonistsService, EncountersService: EncountersService) {
    console.log(alienService, occupationService, ColonistsService, EncountersService);
  }

}
