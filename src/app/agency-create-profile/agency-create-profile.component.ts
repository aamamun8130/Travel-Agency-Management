import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SessionStorageService } from 'ngx-webstorage'

@Component({
  selector: 'app-agency-create-profile',
  templateUrl: './agency-create-profile.component.html',
  styleUrls: ['./agency-create-profile.component.css']
})
export class AgencyCreateProfileComponent implements OnInit {

  constructor(private _User:DataService, private sessionST:SessionStorageService) { }

  aCreateProfile(name,phone,telpho,add){
    let logUserEmail = this.sessionST.retrieve("login-email");
    this._User.createUserProfile(logUserEmail,name,phone,telpho,add).subscribe();

  }

  ngOnInit() {
  }

}
