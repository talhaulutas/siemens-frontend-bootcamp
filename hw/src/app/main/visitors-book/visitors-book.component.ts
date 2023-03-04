import { Visitor } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-visitors-book',
  templateUrl: './visitors-book.component.html',
  styleUrls: ['./visitors-book.component.css']
})
export class VisitorsBookComponent {
  newVisitor:Visitor | undefined = undefined;
  visitorList:Visitor[] = [];
  constructor(private formBuilder:FormBuilder)
  {}
  public visitorForm = this.formBuilder.group({
    name: new FormControl(),
    email: new FormControl(),
    content: new FormControl(),
    birthDate: new FormControl(),
    publishDateExpire: new FormControl(),
    contentType:new FormControl()
  })
  onSubmit()
  {
    this.newVisitor = this.visitorForm.value as Visitor;
    this.visitorList.push(this.newVisitor);
    console.log(this.newVisitor);
  }

}
