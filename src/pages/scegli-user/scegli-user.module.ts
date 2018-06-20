import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScegliUserPage } from './scegli-user';

@NgModule({
  declarations: [
    ScegliUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ScegliUserPage),
  ],
})
export class ScegliUserPageModule {}
