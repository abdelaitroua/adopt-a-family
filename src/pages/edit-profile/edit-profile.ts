import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { TabsPage } from '../tabs/tabs';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument   } from 'angularfire2/firestore';
/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  profile = {} as Profile; 

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFirestore,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  submit(){
    this.afAuth.authState.take(1).subscribe(auth =>{
      this.afDatabase.doc(`profile/${auth.uid}`).set(this.profile)
        .then(( ) => {this.navCtrl.setRoot(TabsPage)})
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
