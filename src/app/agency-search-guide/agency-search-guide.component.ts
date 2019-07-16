import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SessionStorageService } from 'ngx-webstorage'
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-agency-search-guide',
  templateUrl: './agency-search-guide.component.html',
  styleUrls: ['./agency-search-guide.component.css']
})
export class AgencySearchGuideComponent implements OnInit {

  public us = [];
  public findUserList = [];
  public prevTabId = "NULL";
  public reviewList= [];
  public friRevRating = 0.0;
  public comRevRating = 0.0;

  constructor(private _us: DataService, private sessionST: SessionStorageService) { }

  viewRating(tabId,revList) {
    let fri = tabId + "fri";
    let com = tabId + "com";
    let userEm = tabId;
    var friReviewTotal = 0.0;
    var comReviewTotal = 0.0;
    var revNo = 0.0;

    console.log(fri);
    console.log(com);


    revList.forEach(user => {
        if(user.useremail == userEm){
          friReviewTotal = friReviewTotal + parseFloat(user.friendliness);
          comReviewTotal = comReviewTotal + parseFloat(user.communicative);
          revNo += 1.0;
        }

    } );

    console.log(revNo);
    if(revNo != 0){
      this.friRevRating = friReviewTotal/revNo;
      this.comRevRating = comReviewTotal/revNo;  
    }
    else
  {
    this.friRevRating = 0.0;
    this.comRevRating = 0.0; 
  }
    console.log(this.friRevRating);
    console.log(this.comRevRating);
    //console.log(tabId);
    if (this.prevTabId != "NULL") {
      document.getElementById(this.prevTabId)["style"].display = "none";
    }
    document.getElementById(tabId.replace('.','').replace('@',''))["style"].display = "block";
    const ratings = {
      fri: this.friRevRating,
      com: this.comRevRating

    };
    for (const rating in ratings) {
      //console.log(rating);
    }
    // total number of stars
    const starTotal = 5;

      var starPercentage = (this.friRevRating / starTotal) * 100;
      var starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
      document.querySelector(`.${fri.replace('.','').replace('@','')} .stars-inner`)["style"].width = starPercentageRounded;

      var starPercentag = (this.comRevRating/ starTotal) * 100;
      var starPercentageRound = `${(Math.round(starPercentag / 10) * 10)}%`;
      document.querySelector(`.${com.replace('.','').replace('@','')} .stars-inner`)["style"].width = starPercentageRound;
    

    this.prevTabId = tabId.replace('.','').replace('@','');
  }

  emailReplace(email){
   
    return email.replace('.','').replace('@','');
  }


  agencySendRequest(email, type,inviteId) {
    //document.getElementById("load")["style"].display = "block";
    let inviteButtonId = inviteId + "invite";
    let loadImgId = inviteId + "img";
    console.log(email);
    let senderEmail = this.sessionST.retrieve("login-email");
    this._us.postHireRequest(email, senderEmail, type).subscribe(data => this.us = data);
    document.getElementById(loadImgId)["style"].display = "block";
    document.getElementById(inviteId+'spanid').innerHTML = "Sending...";
    setTimeout(function () {
      //document.getElementById("load")["style"].display = "none";
    document.getElementById(loadImgId)["style"].display = "none";
    }, 1500);
    setTimeout(function () {
      document.getElementById(inviteButtonId).innerHTML = "Request Sent<img style='height:22px;width:30px; padding-left:5px; padding-left:5px;' src='assets/img/conf.png'>";
      document.getElementById(inviteButtonId).setAttribute("disabled", "true");

    }, 1500);

  }

  searchGuide(userlist, searchInput) {
    this.findUserList = [];
    let noti = 0;
    let srs = searchInput.toLowerCase();
    if (searchInput == "") {
      alert("search field empty");
      return;
    }
    userlist.forEach(user => {
      let add = user.address.toLowerCase();
      console.log(add);
      if (add.search(srs) >= 0 && user.type == "guider") {
        this.findUserList.push(user);
        noti = 1;
        console.log("found....");
        console.log();


      }

    });

    if (noti == 0) {
      alert("Not Found......!!!!!!");
    }
  }

  ngOnInit() {
    this._us.getUsers().subscribe(data => this.us = data);
    this._us.getReviewlist().subscribe(data => this.reviewList = data);
    //console.log(this.us['data']);
    // console.log('is');
    // for (let i in JSON.parse(this.us)) {
    //   console.log(this.us[i]);
    // }

  }

}
