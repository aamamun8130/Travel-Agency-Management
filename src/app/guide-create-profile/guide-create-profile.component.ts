import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-guide-create-profile',
  templateUrl: './guide-create-profile.component.html',
  styleUrls: ['./guide-create-profile.component.css']
})
export class GuideCreateProfileComponent implements OnInit {

  constructor(public _user:DataService, public sessionST:SessionStorageService) { }

  gCreateProfile(name,phone,telpho,add){
    let logUserEmail = this.sessionST.retrieve("login-email");
    this._user.createUserProfile(logUserEmail,name,phone,telpho,add).subscribe();
    window.location.href = "http://localhost:4200/GuiderHome/gcreateprofile";
  }

  ngOnInit() {
  }

}
