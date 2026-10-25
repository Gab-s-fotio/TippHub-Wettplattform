
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CommunityJson {
  name: string;
  beschreibung: string;
  teilnehmer: string[];
  bildUrl: string;
}

@Component({
  selector: 'app-my-communitys',
  templateUrl: './my-communitys.component.html',
  styleUrls: ['./my-communitys.component.scss']
})
export class MyCommunitysComponent implements OnInit {
  communities: CommunityJson[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{communities: CommunityJson[]}>('assets/communities.json')
      .subscribe(data => this.communities = data.communities);
  }
}



