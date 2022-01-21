import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then((m) => m.PostsModule)
  },
  {
    path: 'matchmgmt',
    loadChildren: () => import('./matchmgmt/matchmgmt.module').then(_ => _.MatchmgmtModule)
  },
  {
    path: 'recordmgmt',
    loadChildren: () => import('./recordmgmt/recordmgmt.module').then(_ => _.RecordmgmtModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
