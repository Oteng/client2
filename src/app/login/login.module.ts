import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
    imports: [CommonModule, BrowserModule, RouterModule.forChild([
        {path: 'login', component: LoginComponent}
    ]), FormsModule],
  providers: []
})

export class LoginModule{

}
