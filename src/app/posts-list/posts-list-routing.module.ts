import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsListPage } from './posts-list.page';

const routes: Routes = [
  {
    path: '',
    component: PostsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsListPageRoutingModule {}
