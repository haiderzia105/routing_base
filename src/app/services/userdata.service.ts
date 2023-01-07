import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return [
      { name : 'Haider', email : 'haider.1@gmail.com' },
      { name : 'Zia',    email : 'zia.01@gmail.com' },
      { name : 'Sameer', email : 'sameer.001@gmail.com' },
      { name : 'Zulifiqar', email : 'zulfi.0011@gmail.com' },
    ]
  }
}
