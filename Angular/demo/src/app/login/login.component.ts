import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string ="";
  password: string= "";
  
  constructor(private route:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap=>{
      console.log(paramMap);
    }

    )

  }

  login() {
    console.log(this.email);
    console.log(this.password);
  }
}
