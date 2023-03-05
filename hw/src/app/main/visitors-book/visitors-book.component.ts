import { Visitor } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-visitors-book',
  templateUrl: './visitors-book.component.html',
  styleUrls: ['./visitors-book.component.css']
})
export class VisitorsBookComponent {
  newVisitor:Visitor | undefined = undefined;
  visitorList:any[] = [];
  constructor(private formBuilder:FormBuilder)
  {}
  public visitorForm = this.formBuilder.group({
    name: ['',[Validators.required]],
    email: ['',[Validators.required]],
    content: ['',[Validators.required,Validators.minLength(50)]],
    birthDate: [[new Date(), [Validators.required]]],
    publishDateExpire: [''],
    contentType:['',[Validators.required]]
  })
  onSubmit()
  {
    this.newVisitor = this.visitorForm.value as Visitor;
    this.visitorList.push(this.newVisitor);
    console.log(this.newVisitor);
  }

}
