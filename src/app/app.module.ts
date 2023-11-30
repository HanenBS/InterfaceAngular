import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainProfilComponent } from './main-profil/main-profil.component';
import { MainContentComponent } from './main-content/main-content.component';
import {AngularMaterialModule} from "./shared/angular-material/angular-material.module";
import { FooterComponent } from './footer/footer.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    HeaderComponent,
    MainHeaderComponent,
    MainProfilComponent,
    MainContentComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        FlexLayoutModule,
        AngularMaterialModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
