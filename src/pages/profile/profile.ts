import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase} from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Profile } from '../../models/profile';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument   } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';
import { EditProfilePage } from '../edit-profile/edit-profile';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  username: String; 
  //profileData: FirebaseObjectObservable<Profile>
  profileData: AngularFirestoreDocument<Profile>
  profileDataObserve: Observable<Profile>
  
  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFirestore,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.afAuth.authState.take(1).subscribe(data => {
      this.profileData = this.afDatabase.doc(`profile/${data.uid}`);
      this.profileDataObserve = this.profileData.valueChanges();
      this.username = data.email;
    });
  }

  signOut() {
    this.navCtrl.setRoot(LoginPage);
  }

  editProfile() {
    this.navCtrl.push(EditProfilePage);
  }

}
