import { Component , ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-base';
  okay =  'abc';


//   more:any;
//   constructor(private userdata:UserdataService){
//     userdata.more().subscribe((data)=>{
//       console.warn("data",data);
//       this.more = data;
//     });  
//   };
//  insertUserData(see:any){ 
//   this.userdata.saveUsers(see).subscribe((result)=>{
//     console.warn('see');
//   })
//  };


constructor(private viewContainer:ViewContainerRef){}
  async loadContact(){
   this.viewContainer.clear();
   const {ContactComponent} = await import('./contact/contact.component');
   this.viewContainer.createComponent(ContactComponent);

  }
  async loadContactMe(){
    this.viewContainer.clear();
    const {ContactMeComponent} = await import('./contact-me/contact-me.component');
    this.viewContainer.createComponent(ContactMeComponent);
 
   }

}
