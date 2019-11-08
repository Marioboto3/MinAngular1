import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {NewSubjectComponent} from './añadir-subject/new-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewSubjectComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
