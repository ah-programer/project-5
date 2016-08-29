import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { ArrivalComponent } from './arrival';
import { EncountersComponent } from './encounters';
import { ReportComponent } from './report';

const appRouter: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'arrival',
  component: ArrivalComponent
},
{
  path: 'encounters',
  component: EncountersComponent
},
{
  path: 'report',
  component: ReportComponent
},
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRouter);
