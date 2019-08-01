import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DataService } from '../data.service';
import { SessionStorageService } from 'ngx-webstorage';
declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-guider-home',
  templateUrl: './guider-home.component.html',
  styleUrls: ['./guider-home.component.css']
})
export class GuiderHomeComponent implements OnInit {
  public loguser = {};
  constructor(public _user: DataService, public sessionST: SessionStorageService) { }

  logout() {
    this.sessionST.clear("login-email");
    window.location.replace("http://localhost:4200");
  }


  ngOnInit() {
    // let logUserEmail = this.sessionST.retrieve("login-email");
    // if (logUserEmail != null) {
    //   this._user.getSingleUserInfo(logUserEmail).subscribe(data => Object.assign(this.loguser, data['data']));
    // }
    // else {
    //   window.location.href = "http://localhost:4200";
    // }
  }

}
