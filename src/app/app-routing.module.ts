import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//login and registration component
import { LoginRegistrationComponent } from './login-registration/login-registration.component';

//home component start
import { AgencyHomeComponent } from './agency-home/agency-home.component';
import { GuiderHomeComponent } from './guider-home/guider-home.component';
//home component end

//Travel agency home-> Create profile component start
import { AgencyCreateProfileComponent } from './agency-create-profile/agency-create-profile.component';
import { AcreateofferComponent } from './acreateoffer/acreateoffer.component';
import { AgencyUpdateProfileComponent } from './agency-update-profile/agency-update-profile.component';
import { AgencySearchGuideComponent } from './agency-search-guide/agency-search-guide.component';
//import { AgencyShowNotiComponent } from './agency-show-noti/agency-show-noti.component';
//Travel agency home-> Create profile component end

import { GuideCreateProfileComponent } from './guide-create-profile/guide-create-profile.component';
import { GuiderUpdateProfileComponent } from './guider-update-profile/guider-update-profile.component';
//import { GuiderShowNotiComponent } from './guider-show-noti/guider-show-noti.component';

//Guider home----> create profile   star

//Guider home----> create profile   end
import { GuiderdashboardComponent } from './guiderdashboard/guiderdashboard.component';
import { AgencydashboardComponent } from './agencydashboard/agencydashboard.component';

/// make history
import { MakehistoryComponent } from './makehistory/makehistory.component';




//{ path: 'reviewdetails', component: UserReviewDetailsComponent }


//admin panel//////
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


const routes: Routes = [
  { path: '', component:  AdminPanelComponent},/////AdminPanelComponent      ///LoginRegistrationComponent   /// UserReviewDetailsComponent
  {
    path: 'AgencyHome',
    component: AgencyHomeComponent,
    children: [
      { path: 'acreateprofile', component: AgencyCreateProfileComponent },
      { path: 'acreateoffer', component: AcreateofferComponent },
      { path: 'makehistory', component:  MakehistoryComponent},
      { path: 'aupdateprofile', component: AgencyUpdateProfileComponent },
      { path: 'asearchguide', component: AgencySearchGuideComponent }
     // { path: 'ashownoti', component: AgencyShowNotiComponent }
    ]
  },

  {
    path: 'GuiderHome',
    component: GuiderHomeComponent,
    children: [
      { path: 'gcreateprofile', component: GuideCreateProfileComponent },
      { path: 'gupdateprofile', component: GuiderUpdateProfileComponent },
      //{ path: 'gshownoti', component: GuiderShowNotiComponent }
      

    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AgencyHomeComponent,GuiderHomeComponent,GuiderdashboardComponent, 
  AgencydashboardComponent,
   LoginRegistrationComponent,AgencyCreateProfileComponent,AcreateofferComponent,AgencyUpdateProfileComponent
  ,AgencySearchGuideComponent,
  GuideCreateProfileComponent,GuiderUpdateProfileComponent,AdminPanelComponent,MakehistoryComponent
  ]