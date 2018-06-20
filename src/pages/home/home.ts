import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DoWorkPage} from '../do-work/do-work';
import {ScegliUserPage} from '../scegli-user/scegli-user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onSalvadanaioClick(){
    let utente = window.localStorage.getItem("utente");
    if (utente) {
      this.navCtrl.push(DoWorkPage);
    }
    else {
      this.navCtrl.push(ScegliUserPage);
    }
  }

}
