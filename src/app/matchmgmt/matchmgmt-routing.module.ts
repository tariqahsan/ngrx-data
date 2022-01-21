import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchmgtDetailComponent } from './matchmgt-detail/matchmgt-detail.component';
import { MatchmgtListComponent } from './matchmgt-list/matchmgt-list.component';

const routes: Routes = [
  { path: '', component: MatchmgtListComponent },
  { path: 'edit/:doeId', component: MatchmgtDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchmgmtRoutingModule { }
