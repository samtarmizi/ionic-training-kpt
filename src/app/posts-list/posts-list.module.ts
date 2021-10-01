import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsListPageRoutingModule } from './posts-list-routing.module';

import { PostsListPage } from './posts-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsListPageRoutingModule
  ],
  declarations: [PostsListPage]
})
export class PostsListPageModule {}
