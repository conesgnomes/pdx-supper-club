import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MemberListComponent } from './member-list/member-list.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MemberListComponent,
    AboutComponent,
    AdminComponent,
    EditMemberComponent,
    MemberDetailComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
