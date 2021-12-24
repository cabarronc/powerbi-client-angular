import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})

  
export class RegisterComponent implements OnInit{
  email: string ="";
  password: string= "";
  cconfirmPassword:string="";
  passwordError: boolean = true;

  constructor(public userService: UserService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap=>{
      console.log(paramMap);
    }

    )

  }
  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe(data => {
      console.log(data);
      this.userService.setToken(data.token);
    });
  }
}