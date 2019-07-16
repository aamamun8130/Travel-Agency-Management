import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-guider-update-profile',
  templateUrl: './guider-update-profile.component.html',
  styleUrls: ['./guider-update-profile.component.css']
})
export class GuiderUpdateProfileComponent implements OnInit {
  public logusr = {};
  constructor(private _usr:DataService, private sessionST:SessionStorageService) { }

  gUpdateProfile(nam,ph,tlp,add) {
    
    let logUserEmail = this.sessionST.retrieve("login-email");
    this._usr.createUserProfile(logUserEmail,nam,ph,tlp,add).subscribe();
    window.location.href= "http://localhost:4200/GuiderHome/gupdateprofile";    

  }

  ngOnInit() {
    let logUserEmail = this.sessionST.retrieve("login-email");
      this._usr.getSingleUserInfo(logUserEmail).subscribe(data => Object.assign(this.logusr, data['data']));
  }

}
