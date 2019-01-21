import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css']
})
export class NewMatchComponent implements OnInit {

  team1Name: string;
  team2Name: string;
  toss: String;
  decision: number;
  overs: number;

  constructor(
    private matchservice: MatchService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onDefineTeamClick(){
    this.matchservice.getMatch().setTeamNames(this.team1Name, this.team2Name);
    console.log(this.team1Name);
    console.log(this.team2Name);
    this.matchservice.getMatch().setToss(this.toss,this.decision);
    console.log(this.toss);
    console.log(this.decision);
    this.matchservice.getMatch().setOvers(this.overs);
    console.log(this.overs);

    this.matchservice.setMatchState();

    this.router.navigate(['/admin','teams'])
    
  }


}
