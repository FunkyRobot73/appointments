import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appointment';
  message = 'Hello Adele!';
  services = ["DJ", "Photo Booth", "Combo"];
  bob() {
    let sum = 2 + 3;
    return sum + this.services[1]
  }
  

};
