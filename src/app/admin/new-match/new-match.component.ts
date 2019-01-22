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

  onClearButtonClick(){

    this.team1Name = null;
    this.team2Name = null;
    this.toss = null;
    this.overs = null;
    this.decision = null;
  }

  onDefineTeamClick(){

    if(this.overs < 5 || this.overs > 50)
    {
      alert('Overs must be in between 5 and 50');
          return;
    }

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
