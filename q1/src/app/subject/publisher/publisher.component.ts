import { Component, OnInit } from '@angular/core';
import { SubjectProviderService } from '../subject-provider.service';
import { FormBuilder, FormControl, FormGroup, NgModel } from '@angular/forms';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit{
formObj?:FormGroup;

  constructor(private FormBuilder:FormBuilder,private subjectProvideService:SubjectProviderService)
  {
   this.formObj=this.FormBuilder.group({
      name:['']
    })
  }
  ngOnInit(): void {
    this.formObj?.get('name')?.valueChanges.subscribe(x=>{
      this.subjectProvideService.publish(x);
    })
    
  }

 

    
}
