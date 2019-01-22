import { Injectable } from '@angular/core';
import { Match } from '../models/Match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  readonly MATCH_STATE_NOT_STARTED     = 0;
  readonly MATCH_STATE_MATCH_DEFINED   = 1;
  readonly MATCH_STATE_TEAMS_DEFINED   = 2;
  readonly MATCH_STATE_INNING1_STARTED = 3;
  readonly MATCH_STATE_INNING1_END     = 4;
  readonly MATCH_STATE_INNING2_STARTED = 5;
  readonly MATCH_STATE_INNING2_END     = 6;
  readonly MATCH_STATE_MATCH_END       = 7;

  private matchState:number;
  private match:Match;

  setMatchState(){
   this.matchState++ ;
  }

  getMatchState():number{
    return this.matchState;
  }

  getMatch(): Match{
    return this.match;
  }
  constructor() {
    this.match = new Match();
    this.matchState = 0;
   }

 
}
