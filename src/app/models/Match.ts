import { Team } from './Team';
import { Commentary } from './Commentary';


export class Match{

    readonly DECISION_BATTING =1;
    readonly DECISION_BaLLING =2;
     
     private team1Name:String;
     private team2Name:String;

     private toss:String;
     private decision:number;
     private overs:number;

     private team1:Team;
     private team2:Team;

     private saveSummary : Array<Commentary> =[];

     setTeamNames(team1:String,team2:String)
     {
       
       this.team1Name = team1;
       this.team2Name = team2;
       console.log(this.team1Name);
       console.log(this.team2Name);

        this.team1 = new Team();
        this.team2 = new Team();
     }

     getTeam1Name(){
       return this.team1Name;
     }

     getTeam2Name(){
       return this.team2Name;
     }

      setToss(tossWon:String,decision:number):Boolean
      {
        this.toss = tossWon;
        this.decision = decision;
          return true;
      }

      setTeams(team1:Team,team2:Team)
      {
        this.team1 = team1;
        this.team2 = team2;
      }

      getTeams()
      {
        return this.team1,this.team2;
      }
      getTeam1(){
        return this.team1;
      }

      getTeam2(){
        return this.team2;
      }

      setOvers(overs:number)
      {
        this.overs = overs;
      }

      getToss():String{
        return this.toss;
      }

      getDecision():number{
        return this.decision;
      }

      getOvers():number{
        return this.overs;
      }

      /**
     * @description if team1 won the toss and choose batting then this function returns 
     * team1 is a batting team otherwise return team2 is a batting team.
  
   */

      getBattingTeam(){
        if(this.toss==this.team1Name && this.decision==this.DECISION_BATTING)
        {
              return this.team1;
        }
        else{
             return this.team2;
        }
      }
      /**
     * @description if team1 won the toss and choose balling then this function returns 
     *  team1 is balling team otherwise  team2 is a balling team.
  
   */
      getBallingTeam(){
        if(this.toss==this.team1Name && this.decision==this.DECISION_BaLLING)
        {
              return this.team1;
        }
        else{
             return this.team2;
        }
      }

      saveSummaryDetails(batsmanOnStrike:String,nonStrikeBatsman:String,newBaller:String,balls: number,overs:number,
        possibilityOfRuns:number,wickets: number,catchBy: String,commentary:String)
        {
            this.saveSummary.push(new Commentary(batsmanOnStrike,nonStrikeBatsman,newBaller,balls,overs,
              possibilityOfRuns,wickets,catchBy,commentary))

          console.log(this.saveSummary);
      }

      getCommentary()
      {
        return this.saveSummary;
      }

      
}
