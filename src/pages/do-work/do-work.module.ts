import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoWorkPage } from './do-work';

@NgModule({
  declarations: [
    DoWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(DoWorkPage),
  ],
})
export class DoWorkPageModule {}
