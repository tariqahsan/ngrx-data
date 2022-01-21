import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PostsResolver } from './posts/posts.resolver';
import { PostsDataService } from './posts/posts-data.service';
import { HttpClientModule } from '@angular/common/http';
import { entityConfig } from './entity-metadata';
import { environment } from './../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, EntityDataService } from '@ngrx/data';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomUrlGeneratorService } from './shared/custom-url-generator.service';


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
/*import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsResolver } from './posts/posts.resolver';
import { PostsDataService } from './posts/posts-data.service';
import { HttpClientModule } from '@angular/common/http';
import { entityConfig } from './entity-metadata';
import { environment } from './../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { CustomUrlGeneratorService } from './shared/custom-url-generator.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule, EntityDataService, HttpUrlGenerator } from '@ngrx/data';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(
      { maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
        autoPause: true, // Pauses recording actions and state changes when the extension window is not open 
      }
    ),
    EntityDataModule.forRoot({})
  ],
  providers: [
    {
      provide: HttpUrlGenerator,
      useClass: CustomUrlGeneratorService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } */