export class Batting{
    private didNotBat :Boolean;
    private runs :number;
    private balls :number;
    private out :String;

    constructor(){
        this.didNotBat = true;
    }

    startBatting(){
        this.didNotBat = false;
        this.runs = 0;
        this.balls = 0;
        this.out = 'NotOut';
    }

    playSingle(){
        this.runs += 1;
        this.balls++;
    }

    playDouble(){
        this.runs += 2;
        this.balls++;
    }

    playDotBalls(){
        this.balls++;
    }

    playFour(){
        this.runs += 4;
        this.balls++;
    }

    playSix(){
        this.runs += 6;
        this.balls++;
    }
}