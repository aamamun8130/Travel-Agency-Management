import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SessionStorageService } from 'ngx-webstorage'

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  public aId = '';
  public cNam = '';
  public cAdd = '';
  public cPho = '';
  public cTel = '';
  public cEm = '';
  public cPas = '';

  public agencyInfo = [];

  constructor(private _user: DataService, private sessionST: SessionStorageService) {

  }

  ngOnInit() {
    this._user.getUsers().subscribe(data => this.agencyInfo = data);

  }

  cncl() {
    document.getElementById('favDialog').setAttribute("style", "display: none;");
    document.getElementById('favDialoge').setAttribute("style", "display: none;");
    document.getElementById('favDialogeee').setAttribute("style", "display: none;");
    document.getElementById('favDialogdel').setAttribute("style", "display: none;");
    document.getElementById('favDialoglock').setAttribute("style", "display: none;");
    document.getElementById('favaddagndia').setAttribute("style", "display: none;");
    
  }
//////////////////////////////////////////////////////////////////////////////////////
  agViewDetails(cName, cAdds, cPhos, cTels,agid) {
    this.cNam = cName;
    this.cAdd = cAdds;
    this.cPho = cPhos;
    this.cTel = cTels;
    this.aId = agid;



    document.getElementById('favDialog').setAttribute("style", "display: block;");

  }

  editAgLogInfo(cem,cpas,aid){
    this.cEm = cem;
    this.cPas = cpas;
    this.aId = aid;
    document.getElementById('favDialoge').setAttribute("style", "display: block;");

  }

  editAgnLoginInfo(em,pas){
    let ema = em;
    let pass = pas;
    let optype = "logininfoedit";
    //alert("login info edit working"+this.aId);
    this._user.adminUpdateAgnInfo(optype,this.aId,ema,pass,"","","","","").subscribe();
    this._user.getUsers().subscribe(data => this.agencyInfo = data);
    document.getElementById('favDialoge').setAttribute("style", "display: none;");

  }

  deleteAgnLoginInfo() {
    //alert("delete working"+this.aId);
    this._user.admindeleteAgnInfo("logininfodel",this.aId).subscribe();
    this._user.getUsers().subscribe(data => this.agencyInfo = data);
    document.getElementById('favDialog').setAttribute("style", "display: none;");


  }
//////////////////////////////////////////////////////////////
editProfile(cName,cAdds,cPhos,cTels,agenId){
  this.cNam = cName;
    this.cAdd = cAdds;
    this.cPho = cPhos;
    this.cTel = cTels;
    this.aId = agenId;
  document.getElementById('favDialogeee').setAttribute("style", "display: block;");

}

editAgnProfile(nm,add,ph,tel){
  ///alert("pro edit working"+this.aId);
  this._user.adminUpdateAgnInfo("agnproedit",this.aId,"","",nm,ph,tel,add,"").subscribe();
  this._user.getUsers().subscribe(data => this.agencyInfo = data);
  document.getElementById('favDialogeee').setAttribute("style", "display: none;");


}

proDelDialog(aidd){
  this.aId = aidd;

  document.getElementById('favDialogdel').setAttribute("style", "display: block;");

}

deleteAgnProfile(){
  alert("pro delete working"+this.aId);
  this._user.getUsers().subscribe(data => this.agencyInfo = data);
}


//////////////////////////////////////////////////////



agnLockDia(cName,cAdds,cPhos,cTels,agenId,userdata,em){

  //console.log(em);

  userdata.forEach(element => {
    //console.log(element.lockstatus);
    if(element.lockstatus == "yes" && element.email == em ){
     //console.log("locked");
     document.getElementById('unlockButton').setAttribute("style", "display: block;");
     document.getElementById('lockButton').setAttribute("style", "display: none;");
    }
    else if(element.lockstatus == "" && element.email == em ){
      document.getElementById('lockButton').setAttribute("style", "display: block;");
     document.getElementById('unlockButton').setAttribute("style", "display: none;");


    }

    
  });

  this.cNam = cName;
    this.cAdd = cAdds;
    this.cPho = cPhos;
    this.cTel = cTels;
    this.aId = agenId;
  document.getElementById('favDialoglock').setAttribute("style", "display: block;");

}

lockingAgency(){
  //alert("locking" + this.aId);
  this._user.adminUpdateAgnInfo("lock",this.aId,"","","","","","","yes").subscribe();
  this._user.getUsers().subscribe(data => this.agencyInfo = data);
  document.getElementById('favDialoglock').setAttribute("style", "display: none;");


}

unlockingAgency(){
  //alert("unlocking" + this.aId);
  this._user.adminUpdateAgnInfo("unlock",this.aId,"","","","","","","").subscribe();
  this._user.getUsers().subscribe(data => this.agencyInfo = data);
  document.getElementById('favDialoglock').setAttribute("style", "display: none;");


}



///////////////////////////////////////////////////////

addAgenDia(){
  document.getElementById('favaddagndia').setAttribute("style", "display: block;");
  
}

addAgnAction(em,pas){
  //alert("working");
  this._user.admininsertAgnInfo(em,pas).subscribe();
  document.getElementById('favaddagndia').setAttribute("style", "display: none;");
  this._user.getUsers().subscribe(data => this.agencyInfo = data);


}



////////////////////////
  touristData() {
    document.getElementById('t_div').setAttribute("style", "display: block;");
    document.getElementById('g_div').setAttribute("style", "display: none;");
    document.getElementById('a_div').setAttribute("style", "display: none;");
  }

  guiderData() {
    document.getElementById('t_div').setAttribute("style", "display: none;");
    document.getElementById('g_div').setAttribute("style", "display: block;");
    document.getElementById('a_div').setAttribute("style", "display: none;");
  }

  agencyData(agencyInfo) {
    document.getElementById('t_div').setAttribute("style", "display: none;");
    document.getElementById('g_div').setAttribute("style", "display: none;");
    document.getElementById('a_div').setAttribute("style", "display: block;");
    console.log(agencyInfo);
  }
}
