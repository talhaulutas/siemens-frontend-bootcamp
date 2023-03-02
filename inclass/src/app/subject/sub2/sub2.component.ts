import { Component } from '@angular/core';
import { SubjectProviderService } from '../subject-provider.service';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component {
  constructor(private subjectProviderService:SubjectProviderService)
  {
    //setTimeout(()=>)

    setTimeout(() => {
      this.subjectProviderService.observableSubject.subscribe(x => {
        console.log("Subscriber2", x);
      })
    }, 2000);
  }
}
