import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

userId:any;
constructor(private route : ActivatedRoute)
{
  console.warn(this.route.snapshot.paramMap.get('id'));
  this.userId = this.route.snapshot.paramMap.get('id');
}
ngOnInit(): void {
  
}
}
