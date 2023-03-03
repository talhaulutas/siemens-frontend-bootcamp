import { Injectable } from '@angular/core';
import { AsyncSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectProviderService {

  

  public mySelectMenuObservable = new Subject();
  public myNameObservable = new Subject();
  private subject;
  public observableSubject = new Observable<any>();
  constructor() {
    this.subject = new Subject();
    this.observableSubject = this.subject.asObservable();
  }

  publish(data: any) {
    this.subject.next(data);
  }

  complete() {
    this.subject.complete();
  }
}
