import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private matchservice:MatchService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    switch(this.matchservice.getMatchState()){
      case this.matchservice.MATCH_STATE_NOT_STARTED:
      this.router.navigate(['/admin/newmatch'],{relativeTo:this.route});
      break;
      case this.matchservice.MATCH_STATE_TEAMS_DEFINED:
      this.router.navigate(['/admin/teams'],{relativeTo:this.route});
      break;
      // case this.matchservice.MATCH_STATE_INNING1_STARTED:
      // this.router.navigate(['/admin/inning'],{relativeTo:this.route});
      // break;
      default:
      this.router.navigate(['admin','inning'])
    }
  }

}
