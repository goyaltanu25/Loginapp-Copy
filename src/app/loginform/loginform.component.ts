import { Component, OnInit } from '@angular/core';
import { PatternValidator } from '@angular/forms';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
 
})
export class LoginformComponent implements OnInit {
uname: string;
pname: string;
 
constructor(private userLogin: LoginService) { 

  }

ngOnInit() {
  
}

onSubmit(){
// this.userLogin.user=this.username;
// this.userLogin.pass=this.password;
this.userLogin.details(this.uname,this.pname);
//console.log(this.uname);
}


}
