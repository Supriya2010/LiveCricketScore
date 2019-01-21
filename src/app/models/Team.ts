import { Players } from './Players';

export class Team {
    player : Array<Players>;
    constructor(){
       this.player= [];
        for(let index=0;index<11;index++)
        {
           let player = new Players(name);
           this.player.push(player);
        }
        
    }

    isTeamComplete(): boolean{
     if(this.player.length === 11){
         return true;
     }
         return false;
    }
    getPlayerNames(){
        return this.player;
    }

    getPlayers(){
        return this.player;

    }

}