import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ScorecardComponent } from './match/scorecard/scorecard.component';
import { CommentaryComponent } from './match/commentary/commentary.component';
import { NewMatchComponent } from './admin/new-match/new-match.component';
import { TeamsComponent } from './admin/teams/teams.component';
import { InningComponent } from './admin/inning/inning.component';

const routes: Routes = [
  { path:'',redirectTo:'header',pathMatch:'full' },
  { 
    path:'admin',
    component:AdminComponent,
    children:[
      { path:'newmatch',component:NewMatchComponent },
      { path:'teams',component:TeamsComponent },
      { path:'inning',component:InningComponent}
    ]
     
  },

  { path:'scorecard',component:ScorecardComponent},
  
  { path:'commentary',component:CommentaryComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
