import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styles: [
  ]
})
export class SideBarComponent implements OnInit {
  opened = false;
  constructor() { }

  ngOnInit(): void {
  }
  
 
  toggleSidebar() {
    this.opened = !this.opened;
  }
}
