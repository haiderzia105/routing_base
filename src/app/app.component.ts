import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-base';
  users:any;
  constructor(private userdata:UserdataService){
    console.warn("userdata", userdata.users());
    this.users= userdata.users();
  }
}
