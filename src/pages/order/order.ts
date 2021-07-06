import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TakeorderPage } from '../takeorder/takeorder';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController) {
  }
  openPage() {
    this.menuCtrl.open();
  }
  closeMenu(){
    this.menuCtrl.close;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  take()
  {
    this.navCtrl.push(TakeorderPage);
  }
  back(){
    this.navCtrl.pop();
  }

}
