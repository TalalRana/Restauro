import { Component, ViewChild } from '@angular/core';
import { Platform, Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { SalesPage } from '../pages/sales/sales';
import { OrderPage } from '../pages/order/order';
import { ReportPage } from '../pages/report/report';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild(Nav) nav: Nav; 
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  home()
  {
    this.nav.push(HomePage);
  }
  sales()
  {
    this.nav.push(SalesPage);
  } 
  order()
  {
    this.nav.push(OrderPage);
  }
  report()
  {
    this.nav.push(ReportPage);
  }
  settings()
  {
    this.nav.push(SettingsPage);
  }
  logout()
  {
    this.nav.push(LoginPage);
  }
}

