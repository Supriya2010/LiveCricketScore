import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-inning',
  templateUrl: './inning.component.html',
  styleUrls: ['./inning.component.css']
})
export class InningComponent implements OnInit {

  @ViewChild('possibleRuns')possibleRunsinf:ElementRef;
  @ViewChild('Wicket') wicketTypeinf:ElementRef;

  batsmanOnStrike:String;
  nonStrikeBatsman:String;
  newBaller:String;
  balls: number=0;
  overs:number=0;
  possibilityOfRuns:number;
  wickets: number;
  catchBy: String;
  commentary:String;

  public showWicket:boolean = false;
  public showCatchBy:boolean = false;
  public buttonName:any = 'ShowType';
  public buttonName1:any = 'Show';

  score;
  outby;

  constructor(
    private  matchService:MatchService,
  ) 
   { 
    console.log(this.matchService.getMatch().getTeam1().player);
    console.log(this.matchService.getMatch().getTeam2().player);
   }

  ngOnInit() {
  }

  onSelectOfPossibility()
  {
   this.score=((<HTMLInputElement>this.possibleRunsinf.nativeElement).value);
   if(this.score == 'Wicket')
    {
     this.showWicket = true;
    }
   else
     {
      this.showWicket=false;
     }

  }

  onSelectOfWicket()
  {
    this.outby=((<HTMLInputElement>this.wicketTypeinf.nativeElement).value);
    if(this.outby=='Catch' || this.outby=='Stumping')
    {
     this.showCatchBy = true;
    } else 
    {
      this.showCatchBy = false;
    }
  }

  onaddScoreButtonClick()
  {
    this.balls++;
    if(this.balls>=7)
    {
      this.balls=1;
      this.overs++
    }
    this.matchService.getMatch().saveSummaryDetails(this.batsmanOnStrike,this.nonStrikeBatsman,this.newBaller,this.balls,this.overs,
      this.possibilityOfRuns,this.wickets,this.catchBy,this.commentary);
  }
}
