import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCaseComponent } from './helpdesk/search-case/search-case.component';
import { SidebarComponent } from './helpdesk/sidebar/sidebar.component';
import { SearchCaseBasicComponent } from './helpdesk/search-case-basic/search-case-basic.component';
import { SummaryComponent } from './helpdesk/summary/summary.component';
import { CustomizedChpComponent } from './helpdesk/customized-chp/customized-chp.component';
import { PreviousCasesComponent } from './helpdesk/previous-cases/previous-cases.component';
import { FollowersComponent } from './helpdesk/followers/followers.component';
import { AddFollowerComponent } from './helpdesk/add-follower/add-follower.component';
import { ServiceJobComponent } from './helpdesk/service-job/service-job.component';
import { PartInfoComponent } from './helpdesk/part-info/part-info.component';
import { SubServiceCasesComponent } from './helpdesk/sub-service-cases/sub-service-cases.component';
import { CasebookComponent } from './helpdesk/casebook/casebook.component';
import { ViewCasebookComponent } from './helpdesk/view-casebook/view-casebook.component';
import { AddNotesComponent } from './helpdesk/add-notes/add-notes.component';
import { AssignCaseComponent } from './helpdesk/assign-case/assign-case.component';
import { AddScheduleComponent } from './helpdesk/add-schedule/add-schedule.component';
import { CreatePartRequestComponent } from './helpdesk/create-part-request/create-part-request.component';
import { CreateSkillRequestComponent } from './helpdesk/create-skill-request/create-skill-request.component';
import { ChargeableEventComponent } from './helpdesk/chargeable-event/chargeable-event.component';
import { CaseCreationComponent } from './helpdesk/case-creation/case-creation.component';
import { LoginComponent } from './helpdesk/login/login.component';
import { PagenotfoundComponent } from './helpdesk/pagenotfound/pagenotfound.component';
import { CreateTmComponent } from './helpdesk/create-tm/create-tm.component';
import { DashBoardComponent } from './helpdesk/dash-board/dash-board.component';
import { CaseStatusComponent } from './helpdesk/case-status/case-status.component';
import { ForgotPasswordComponent } from './helpdesk/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"createT&M",
    component:CreateTmComponent
  },
  {
    path:"sidebar",
    component:SidebarComponent
  },
  {
    path:"searchcase",
    component:SearchCaseComponent
  },
  {
    path:"basic",
    component:SearchCaseBasicComponent
  },
  {
    path:"summary",
    component:SummaryComponent
  },
  {
    path:"customized_chp",
    component:CustomizedChpComponent
  },
  {
    path:"previous_cases",
    component:PreviousCasesComponent
  },
  {
    path:"followers",
    component:FollowersComponent
  },
  {
    path:"add_follower",
    component:AddFollowerComponent
  },
  {
    path:"service_job",
    component:ServiceJobComponent
  },
  {
    path:"parts_info",
    component:PartInfoComponent
  },
  {
    path:"sub_service_cases",
    component:SubServiceCasesComponent
  },
  {
    path:"casebook",
    component:CasebookComponent
  },
  {
    path:"viewcasebook",
    component:ViewCasebookComponent
  },
  {
    path:"add_notes",
    component:AddNotesComponent
  },
  {
    path:"assign_case",
    component:AssignCaseComponent
  },
  {
    path:"add_schedule",
    component:AddScheduleComponent
  },
  {
    path:"create_part_request",
    component:CreatePartRequestComponent
  },
  {
    path:"create_skill_request",
    component:CreateSkillRequestComponent
  },
  {
    path:"chargeable_event",
    component:ChargeableEventComponent
  },
  {
    path:"case_creation",
    component:CaseCreationComponent
  },
  {
    path:"helpdesk",
    component:DashBoardComponent
  },
  {
    path:"case_status",
    component:CaseStatusComponent
  },
  {
    path:"forgot_password",
    component:ForgotPasswordComponent
  },
  {
    path:"**",
    component:PagenotfoundComponent
  },
  // 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
