import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//PrimeNG imports
import {InputTextModule} from 'primeng/inputtext';

//Material imports
import {MatInputModule, MatFormFieldModule, MatButtonModule} from '@angular/material/';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    InputTextModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
