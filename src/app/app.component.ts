import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {OneSignal,OSNotification} from '@ionic-native/onesignal';
//import {ILocalNotification, LocalNotifications} from '@ionic-native/local-notifications';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, /*public localNotifications: LocalNotifications*/ public oneSignal:OneSignal) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.oneSignal.startInit('e418e90c-a791-48aa-9a38-bda6be5cbf77');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();
    /*this.localNotifications.hasPermission().then(
      (res:boolean) => {
        if (res) {
          this.doNotificationWork();
        }
        else {
          this.localNotifications.requestPermission().then(
            (res2: boolean) => {
              if (res2) {
                this.doNotificationWork();
              }
            }
          );
        }
      }
    );*/
  }

  /*doNotificationWork(){
    let oggiAlle23 = new Date(new Date().setHours(23));
    this.localNotifications.getAllScheduled().then(
      (data: Array<ILocalNotification>) => {
        if (data.length < 30) {
          this.localNotifications.cancelAll().then(
            () => {
              for (let i = 0; i<30; i++) {
                this.localNotifications.schedule([{
                  title: 'SalvadanApp',
                  text: 'Ricordati di aggiungere il soldino!',
                  trigger: {at: new Date(oggiAlle23.getTime() + 60*60*24*i)},
                }]);
              }
            }
          );
        }
      }
    );
  }*/
}

