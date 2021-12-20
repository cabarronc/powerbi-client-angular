
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit{
  email: string ="";
  password: string="";
  confirmPassword: string ="";

  constructor(private route:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap=>{
      console.log(paramMap);
    }

    )

  }

  register() {
    console.log(this.email);
    console.log(this.password);
  }
}
