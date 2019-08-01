import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DataService } from '../data.service';
import { SessionStorageService } from 'ngx-webstorage'

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {

  userName: string;
  public users = [];


  constructor(private _user: DataService, private sessionST: SessionStorageService) {
  }

  getLoginFeildValue(users, em, pass) {
    let status = "false";
    console.log(users);
    console.log(em);
    console.log(pass);
    users.forEach(user => {
      if (user.email == em && user.password == pass) {
        if(user.lockstatus == "yes"){
          alert("you are locked by Admin");
              status = "true";

        }
        else if (user.type == "guider") {
          status = "true";
          this.sessionST.store("login-email", user.email);
          this.sessionST.store("user-id", user._id);
          window.location.href = "http://localhost:4200/GuiderHome";
          return;
        }
        else if (user.type == "agency") {
          status = "true";
          this.sessionST.store("login-email", user.email);
          this.sessionST.store("user-id", user._id);
          window.location.href = "http://localhost:4200/AgencyHome";
          return;
        }
        else if (user.type == "traveller") {
          status = "true";
          this.sessionST.store("login-email", user.email);
          this.sessionST.store("user-id", user._id);
          window.location.href = "http://localhost:4200/TouristHome";
          return;
        }

      }

    });

    if (status == "false") {
      alert("Entry wrong.......");
    }


  }


  getRegFeildValue(users, em, pass, cpass, utype) {
    let status = "false";
    console.log(em);
    console.log(pass);
    console.log(cpass);
    console.log(utype);
    users.forEach(user => {
      if (user.email == em) {
        status = "true";

      }
    });

    if (status == "false") {
      this._user.postUser(em, pass, utype).subscribe(data => this.users = data);

      if (utype == "guider") {
        this.sessionST.store("login-email", em);
        window.location.href = "http://localhost:4200/GuiderHome";
      }
      else if (utype == "agency") {
        this.sessionST.store("login-email", em);
        window.location.href = "http://localhost:4200/AgencyHome";
      }
      else if (utype == "traveller") {
        this.sessionST.store("login-email", em);
        window.location.href = "http://localhost:4200/TouristHome";
      }

    }
    else if (status == "true") {
      alert("This email has already account...");
    }


  }



  ngOnInit() {
    //alert(this.sessionST.retrieve("login-email"));
    //this.sessionST.clear("login-email");
    this._user.getUsers().subscribe(data => this.users = data);
    $(document).ready(function () {
      $('.login-info-box').fadeOut();
      $('.login-show').addClass('show-log-panel');
    });


    $('.login-reg-panel input[type="radio"]').on('change', function () {
      if ($('#log-login-show').is(':checked')) {
        $('.register-info-box').fadeOut();
        $('.login-info-box').fadeIn();
        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');

      }
      else if ($('#log-reg-show').is(':checked')) {
        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();

        $('.white-panel').removeClass('right-log');

        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');
      }
    });


  }

}
