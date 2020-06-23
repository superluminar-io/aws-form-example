import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Auth } from '@aws-amplify/auth';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppComponent } from './app.component';

Auth.configure({
  userPoolId: 'eu-central-1_MxmHXkpGJ',
  userPoolWebClientId: '2p8mhm24u21ou5g7n9sejddmoh',
  region: 'eu-central-1',
});

@NgModule({
  declarations: [AppComponent],
  imports: [AmplifyUIAngularModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
