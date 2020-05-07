import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './modules/auth/auth.module';
import { SettingModule } from './modules/setting/setting.module';
import { HomeModule } from './modules/home/home.module';
import { LicenceModule } from './modules/licence/licence.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AuthModule,
    HomeModule,
    LicenceModule,
    SettingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
