import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';
import { IUser } from './user';
import { Observable } from 'rxjs';


@Injectable()
export class DataService {
  private _url : string = "http://localhost:4600/hhh";
  private _urlgnoti : string = "http://localhost:4600/hhh/reg/udel/uupdt/userinfo/search/sendrequest/guidernotilist";
  private _urlanoti : string = "http://localhost:4600/hhh/reg/udel/uupdt/userinfo/search/sendrequest/guidernotilist/agencynotilist";
  private _urlreview : string = "http://localhost:4600/hhh/reg/udel/uupdt/userinfo/search/sendrequest/guidernotilist/agencynotilist/review/relist";
     result: any;
  constructor( private http : HttpClient) { }

  getUsers() : Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url);
  }

  getReviewlist() : Observable<IUser[]>{
    return this.http.get<IUser[]>(this._urlreview);
  }

  // getUsers() : Observable<IUser[]>{
  //   return this.http.get<IUser[]>(this._url);
  // }

  postUser(ema,pass,uty) : Observable<IUser[]>{
    return this.http.get<IUser[]>("http://localhost:4600/hhh/reg",{params : {email:ema,password:pass,utype:uty}});
  }

  postHireRequest(senderEmail,invitedEmail,uty) : Observable<IUser[]>{
    return this.http.get<IUser[]>("http://localhost:4600/hhh/reg/udel/uupdt/userinfo/search/sendrequest",{params : {semail:senderEmail,iemail:invitedEmail,utype:uty}});
  }

  getSingleUserInfo(ema) : Observable<IUser[]>{
    return this.http.get<IUser[]>("http://localhost:4600/hhh/reg/udel/uupdt/userinfo",{params : {email:ema}});
  }

  createUserProfile(ema,nam,ph,tel,add) : Observable<IUser[]>{
    return this.http.get<IUser[]>("http://localhost:4600/hhh/reg/udel/uupdt",{params : {email:ema,name:nam,phone:ph,telephone:tel,address:add}});
  }adminagndel

  adminUpdateAgnInfo(optype,id,ema,pass,nam,ph,tel,add,lsta) : Observable<IUser[]>{
    return this.http.get<IUser[]>("http://localhost:4600/hhh/reg/udel/uupdt/userinfo/adminagnupdate",{params : {operatype:optype,iid:id,email:ema,password:pass,name:nam,phone:ph,telephone:tel,address:add,lockstatus:lsta}});
  }

  admindeleteAgnInfo(optype,id) : Observable<IUser[]>{
    return this.http.get<IUser[]>("http://localhost:4600/hhh/reg/udel/uupdt/userinfo/adminagnupdate/adminagndel",{params : {operatype:optype,iid:id}});
  }

  admininsertAgnInfo(em,pass) : Observable<IUser[]>{
    return this.http.get<IUser[]>("http://localhost:4600/hhh/reg/udel/uupdt/userinfo/adminagnupdate/adminagndel/agnadd",{params : {email:em,password:pass}});
  }

  postReview(uem,rem,fn,cm) : Observable<IUser[]>{
    return this.http.get<IUser[]>("http://localhost:4600/hhh/reg/udel/uupdt/userinfo/search/sendrequest/guidernotilist/agencynotilist/review",{params : {uemail:uem,remail:rem,friendliness:fn,communication:cm}});
  }
}
