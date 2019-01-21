import { Batting } from './Batting';
import { Balling } from './Balling';

export class Players{

    private name :String;
    private batting :Batting;
    private balling :Balling;

    constructor( name:String){
        this.balling = new Balling;
        this.batting = new Batting;
        this.name = name;
    }

    setPlayerName(name:String){
        this.name = name;
        console.log(this.name);
    }

    setPlayers(name:String){
        this.name = name;
        console.log(this.name);
    }

}
