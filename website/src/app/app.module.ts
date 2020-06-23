import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Auth } from '@aws-amplify/auth';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppComponent } from './app.component';

Auth.configure({
  userPoolId: 'eu-central-1_vTci8DPwj',
  userPoolWebClientId: '37fqan7ausv3sekivb5ugmd8rp',
  region: 'eu-central-1',
});

@NgModule({
  declarations: [AppComponent],
  imports: [AmplifyUIAngularModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
