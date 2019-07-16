import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-agency-update-profile',
  templateUrl: './agency-update-profile.component.html',
  styleUrls: ['./agency-update-profile.component.css']
})
export class AgencyUpdateProfileComponent implements OnInit {
  public logUser = {};

  constructor(private _usr:DataService, private sessionST:SessionStorageService) { }

  aUpdateProfile(nam,ph,tlp,add) {
    
    let logUserEmail = this.sessionST.retrieve("login-email");
    console.log(logUserEmail);
    this._usr.createUserProfile(logUserEmail,nam,ph,tlp,add).subscribe();
    window.location.href= "http://localhost:4200/AgencyHome/aupdateprofile";    

  }


  ngOnInit() {
    let logUserEmail = this.sessionST.retrieve("login-email");
      this._usr.getSingleUserInfo(logUserEmail).subscribe(data => Object.assign(this.logUser, data['data']));


  }

}
