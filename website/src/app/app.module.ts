import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Auth } from '@aws-amplify/auth';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppComponent } from './app.component';

Auth.configure({
  userPoolId: 'eu-west-1_YSQ55DWb6',
  userPoolWebClientId: '6qg0r9k4l78tvqdcb3mv0t3mdu',
  region: 'eu-west-1',
});

@NgModule({
  declarations: [AppComponent],
  imports: [AmplifyUIAngularModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
