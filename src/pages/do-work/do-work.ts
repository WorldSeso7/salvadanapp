import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DoWorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-do-work',
  templateUrl: 'do-work.html',
})
export class DoWorkPage {

  public dataUltimoPagamento: Date;
  public dataUltimoUpdate: Date;
  public utente: string;
  public saldo: number;
  public hasPagato: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataUltimoUpdate = window.localStorage.getItem("dataUltimoUpdate") ? new Date(window.localStorage.getItem("dataUltimoUpdate")) : null;
    this.dataUltimoPagamento = window.localStorage.getItem("dataUltimoPagamento") ? new Date(window.localStorage.getItem("dataUltimoPagamento")) : null;
    this.utente = window.localStorage.getItem("utente");

    this.saldo = window.localStorage.getItem("saldo") ? parseInt(window.localStorage.getItem("saldo")) : 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoWorkPage');
  }

  onAddSoldino(soldino: number){
    let result:boolean = confirm("Sei sicuro di voler aggiungere "+soldino+"€?");
    if (result) {
      this.saldo = this.saldo + soldino;
      window.localStorage.setItem("saldo", ""+this.saldo);
      this.dataUltimoUpdate = (new Date());
      window.localStorage.setItem("dataUltimoUpdate", ""+this.dataUltimoUpdate);
    }
  }

  onDoSaldo(){
    if (!this.saldo) {
      alert("Ehi! Non c'è niente da saldare qui!");
    }
    else {
      let result: boolean = confirm("Sei sicuro che hai saldato il tuo debito?");
      if (result) {
        this.saldo = 0;
        window.localStorage.setItem("saldo", ""+this.saldo);
        this.dataUltimoPagamento = (new Date());
        window.localStorage.setItem("dataUltimoPagamento", ""+this.dataUltimoPagamento);
        this.hasPagato = true;
        setTimeout(
          () => {
            this.hasPagato = false
          }, 3000
        );
      }
    }
  }

}
