import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { Form1Component } from './component/form1/form1.component';
import {Routes,RouterModule} from '@angular/router';
import {appRoute,RoutingModule} from './Router/app.routes';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { BindParentComponent } from './component/bind-parent/bind-parent.component';
import { BindChildComponent } from './component/bind-child/bind-child.component';
import { StringpipePipe } from './ngpipe/stringpipe.pipe';
// import { StringPipe } from './ngpipes/string.pipe';


@NgModule({
  
  declarations: [
    AppComponent,
    Form1Component,
    SignupFormComponent,
    BindParentComponent,
    BindChildComponent,
    StringpipePipe],


    imports: [
    BrowserModule,
    HttpModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  
  providers: [UserService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
