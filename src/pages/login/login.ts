import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';
import {AngularFireAuth} from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor( private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {

  }

  async login(user: User){
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password)
      //this.navCtrl.push(TabsPage);
      this.navCtrl.setRoot(TabsPage);
      //console.log(result);
    }
    catch(e){
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
      console.error(e);
    } 
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
