import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Colonist, IOccupation} from '../shared/models';
import { ColonistsService} from '../shared/services/colonists.service';
import { OccupationService} from '../shared/services/job.service';

 //interface ArrivalInterface {

//colonist: IColonist;
// occupation: IOccupation;
 //NO_OCCUPATION_SELECTED: string;
// onSubmit: Function;

//}

@Component({
  moduleId: module.id,
  selector: 'app-arrival',
  templateUrl: 'arrival.component.html',
  styleUrls: ['arrival.component.css'],
  providers:[ColonistsService, OccupationService]
})
export class ArrivalComponent { // implements ArrivalInterface {
   NO_OCCUPATION_SELECTED  ='(none)';
  SERVER_ERROR;

  public occupations: IOccupation[];
  public colonist: Colonist;
  constructor(
      private router: Router,
      private colonistService: ColonistsService,
      private occupationService: OccupationService
  ){
      this.colonist = new Colonist('','', this.NO_OCCUPATION_SELECTED);
      this.occupationService.getOccupation().then(jobs => this.occupations = jobs);
  }
onSubmit() {
  this.colonistService.newColonist(this.colonist).then( (result) => {
    this.router.navigate(['/encounters']);

}).catch(error => {
  this.SERVER_ERROR = 'There was an error processing the colonist.';
});


  }

//  Updatcolonist(){
//   console.log('updating colonist');
//   this.colonist = new Colonist('', '', this.NO_OCCUPATION_SELECTED);
//
// }

  get noOccupation() {
    //  console.log('job', this.colonist.job);
    // console.log('NO_OCCUPATION_SELECTED', this.NO_OCCUPATION_SELECTED);
    return this.colonist.job_id === this.NO_OCCUPATION_SELECTED;
  }

}
