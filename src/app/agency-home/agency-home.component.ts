import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SessionStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-agency-home',
  templateUrl: './agency-home.component.html',
  styleUrls: ['./agency-home.component.css']
})
export class AgencyHomeComponent implements OnInit {
  public loginUser = {};
  imageUrl: string = "../AgencyHomeComponent/prfile.png";
  constructor(private _user: DataService, private sessionST: SessionStorageService) { }

  logout() {
    this.sessionST.clear("login-email");
    window.location.replace("http://localhost:4200");
  }


  ngOnInit() {
    //get email from session who loged in the system....
    let logUserEmail = this.sessionST.retrieve("login-email");
    if (logUserEmail != null) {
      this._user.getSingleUserInfo(logUserEmail).subscribe(data => Object.assign(this.loginUser, data['data']));
    }
    else {
      window.location.href = "http://localhost:4200";
    }

  }

}
