import { Component, OnInit } from '@angular/core';
import { SubjectProviderService } from 'src/app/subject/subject-provider.service';

@Component({
  selector: 'page-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component implements OnInit{
  selectedItemValue: number | undefined;
  name: string | undefined;
  constructor(private subjectProviderService: SubjectProviderService) { }
  ngOnInit(): void {

    this.subjectProviderService.mySelectMenuObservable.subscribe(x => {
      this.selectedItemValue = x as number;
    })

    this.subjectProviderService.myNameObservable.subscribe(x => {
      this.name = x as string;
    })
  }

}
