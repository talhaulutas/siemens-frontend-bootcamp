import { Component } from '@angular/core';
import { SubjectProviderService } from '../subject-provider.service';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component {

  constructor(private subjectProviderService: SubjectProviderService) {



    this.subjectProviderService.observableSubject.subscribe({

      next: (data) => console.log("sub1", data),
      complete: () => console.log("data yayınlama sona ermiş subscriber1"),
      error: (err) => { console.log(err) }

    })
  }
}