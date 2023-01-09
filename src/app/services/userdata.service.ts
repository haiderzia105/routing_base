import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  url = "http://localhost:3000/users";
  constructor(private http:HttpClient) { }
  more(){
    return this.http.get(this.url);
  }
  saveUsers(data:any){
    return this.http.post(this.url,data);
  }

}
  // users()
  // {
  //   return [
  //     { name : 'Haider', email : 'haider.1@gmail.com' },
  //     { name : 'Zia',    email : 'zia.01@gmail.com' },
  //     { name : 'Sameer', email : 'sameer.001@gmail.com' },
  //     { name : 'Zulifiqar', email : 'zulfi.0011@gmail.com' },
  //   ]
  // }