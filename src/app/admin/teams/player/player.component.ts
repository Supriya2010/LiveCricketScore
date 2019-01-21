import { Component, OnInit, Input } from '@angular/core';
import { Team } from 'src/app/models/Team';
import { Players } from 'src/app/models/Players';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() team : Team;
  @Input() player : Players
  @Input() index : number;

  playerName : String;

  
  setName(event){
    const element:HTMLInputElement = event.target;
    this.player.setPlayerName(element.value);
    console.log(element.value);
    }
  constructor() { }

  ngOnInit() {
  }

}
