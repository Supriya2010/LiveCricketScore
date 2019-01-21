import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(
    private matchService:MatchService,
    private router : Router,
  ) { }

  ngOnInit() {
  }

  onStartMatchButtonClick(){
    if(this.matchService.getMatch().getTeams().isTeamComplete()){
      this.matchService.setMatchState();
   this.router.navigate(['/admin','inning'])
    }
  }

}
