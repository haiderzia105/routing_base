import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ContactCompanyComponent } from './contact-company/contact-company.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
{
   path:'',
   component:HomeComponent, 
},
{
  path:'about',
  component: AboutComponent, 
},
{
  path:'contact',
  component: ContactComponent, 
},
{
  path:'contact/:id',
  component: ContactComponent, 
  children:[
    {path:"company" , component:ContactCompanyComponent},
    {path:"me" , component:ContactMeComponent},
  ]
},
{
  path:'**',
  component: NoPageComponent, 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
