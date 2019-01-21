export class Commentary{
  batsmanOnStrike:String;
  nonStrikeBatsman:String;
  newBaller:String;
  balls: number;
  overs:number;
  possibilityOfRuns:number;
  wickets: number;
  catchBy: String;
  commentary:String;

  constructor(batsmanOnStrike:String,nonStrikeBatsman:String,newBaller:String,balls: number,overs:number,
    possibilityOfRuns:number,wickets: number,catchBy: String,commentary:String) 
     {
         this.batsmanOnStrike = batsmanOnStrike;
         this.nonStrikeBatsman = nonStrikeBatsman;
         this.newBaller = newBaller;
         this.balls = balls;
         this.overs = overs;
         this.possibilityOfRuns = possibilityOfRuns;
         this.wickets = wickets;
         this.catchBy = catchBy;
         this.commentary = commentary;
     }

     setBatsmanOnStrike(batsman1:String){
       this.batsmanOnStrike = batsman1;
    }

    setNonStrikeBatsman(batsman2:String){
        this.nonStrikeBatsman = batsman2;
     }

     setNewBaller(baller:String){
        this.newBaller = baller;
     }

     setOvers(over:number)
     {
         this.overs=over;
     }

     setPossibleRuns(runs:number){
        this.possibilityOfRuns = runs;
     }

     setWickets(wicket:number){
         this.wickets = wicket;
     }

     setCommentary(comentary:string){
         this.commentary = comentary;
     }

      setBalls(ball:number){
        this.balls = ball;
      }

      getBalls(){
          return this.balls;
      }

       getBatsmanOnStrike(){
        return this.batsmanOnStrike;
     }

     getNonStrikeBatsman(){
       return this.nonStrikeBatsman;
     }

     getNewBaller(){
        return this.newBaller;
     }

     getOvers()
     {
        return this.overs;
     }

     getPossibleRuns(){
       return this.possibilityOfRuns;
     }

     getCommentary(){
       return this.commentary;
    }
}

