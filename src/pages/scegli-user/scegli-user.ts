import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DoWorkPage} from '../do-work/do-work';

/**
 * Generated class for the ScegliUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scegli-user',
  templateUrl: 'scegli-user.html',
})
export class ScegliUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScegliUserPage');
  }

  onUtenteClick(utente:string){
    window.localStorage.setItem("utente", utente);
    this.navCtrl.setRoot(DoWorkPage, {}, {animate:true, direction: 'forward', animation: 'ios-transition'});
  }

}
