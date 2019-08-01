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

  public gidhist = [];
  public his = [];
  ////////////////////////
  public gNam = '';
  public gEm = '';
  public gPho = '';
  public gAdd = '';
  ////////////////////////////
  public sNam = '';
  public sTy = '';
  public sAr = '';
  public sRes = '';



  constructor(private _us: DataService, private sessionST: SessionStorageService) { }

  agiHistory(hist, gidpro, spot) {
    this.his = [];
    //alert(this.sessionST.retrieve("login-email"));
    let agnEmail = this.sessionST.retrieve("login-email");
    //alert(agnEmail);
    

    hist.forEach(his => {
      let outhis = {
        id: '', aid: '', gid: '', spotid: '', date: '', spotname: '', gname: '', gemail: '',
        gphone: '', gaddress: '', sarea: '', stype: '', srecost: ''
      };
      if (his.aid == agnEmail) {
        outhis.id = his._id;
        outhis.aid = his.aid;
        outhis.gid = his.gid;
        outhis.spotid = his.spotid;
        outhis.date = his.date;

        gidpro.forEach(gide => {
          if (gide.id == his.gid) {
            outhis.gname = gide.name;
            outhis.gemail = gide.email;
            outhis.gphone = gide.phone;
            outhis.gaddress = gide.address;
            spot.forEach(spt => {
              if (his.spotid == spt.sid) {
                outhis.spotname = spt.sname;
                outhis.sarea = spt.sarea;
                outhis.stype = spt.stype;
                outhis.srecost = spt.srecost;

              }
            });
          }

        });

      }
      this.his.push(outhis);

    });
      
    //this.his.push(outhis);
    // console.log(agn);
  }

  cncl() {
    document.getElementById('gidedetaildialog').setAttribute("style", "display:none");
    document.getElementById('spotdialog').setAttribute("style", "display:none");


  }

  // guide detais show

  guideDetails(nm, em, ph, add) {
    this.gNam = nm;
    this.gEm = em;
    this.gPho = ph;
    this.gAdd = add;
    document.getElementById('gidedetaildialog').setAttribute("style", "display:block");
    document.getElementById('spotdialog').setAttribute("style", "display:none");

  }


  // spot details

  spotDetails(snm, sar, sty, arecos) {
    this.sNam = snm;
    this.sAr = sar;
    this.sTy = sty;
    this.sRes = arecos;

    document.getElementById('spotdialog').setAttribute("style", "display:block");
    document.getElementById('gidedetaildialog').setAttribute("style", "display:none");



  }

  ///  history edit

  histEdit(hisId) {
    alert('This id Edit ' + hisId);
  }


  /// history delete

  histDelete(hisId) {
    alert('This id Delete ' + hisId);
  }



  ngOnInit() {
    this._us.getgideHist().subscribe(data => this.gidhist = data);
    //console.log(this.us['data']);
    // console.log('is');
    // for (let i in JSON.parse(this.us)) {
    //   console.log(this.us[i]);
    // }

  }

}
