import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.resetSignUpForm();
  }

  RegisterUser(form: NgForm){
    this.userService.registerUser(form.value)
    .subscribe((data: any)=> {
      if(data.Succeeded){
        this.resetSignUpForm(form);
        this.toastrService.success("User registered successfully!");
      }
      else{
        this.toastrService.error(data.Errors[0]);
      }
    });
  }
  resetSignUpForm(form?: NgForm){
    if(form != null){
      form.reset();
    }
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    }
  }
}
