import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Form1Component} from '../component/form1/form1.component';

import { BindParentComponent } from '../component/bind-parent/bind-parent.component';
import { BindChildComponent } from '../component/bind-child/bind-child.component';
import {SignupFormComponent} from '../signup-form/signup-form.component';
import {AppComponent} from '../app.component';


export const appRoute:Routes=[
    {path:'form1',component:Form1Component},
    {path:'form3',component:SignupFormComponent},
    {path:'form2',component:AppComponent},
    {path:'form4',component:BindParentComponent},
    {
      path: '',
      redirectTo: '/form3',
      pathMatch: 'full'
    }];

export const RoutingModule:ModuleWithProviders=RouterModule.forRoot(appRoute);