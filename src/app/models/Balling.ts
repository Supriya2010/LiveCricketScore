export class Balling{
   private didNotBall : Boolean;
   private overs : number;
   private wickets : number;
   private runs : number;

   constructor(){
       this.didNotBall = true;
   }

   startNewOver(){
       this.didNotBall = false;
       this.overs = 0;
       this.runs = 0;
       this.wickets =0;
   }
    
     
}