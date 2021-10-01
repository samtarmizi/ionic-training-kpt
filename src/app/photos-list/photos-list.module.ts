import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotosListPageRoutingModule } from './photos-list-routing.module';

import { PhotosListPage } from './photos-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotosListPageRoutingModule
  ],
  declarations: [PhotosListPage]
})
export class PhotosListPageModule {}
