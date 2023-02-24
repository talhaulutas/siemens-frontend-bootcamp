import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-child-search',
  templateUrl: './child-search.component.html',
  styleUrls: ['./child-search.component.css']
})
export class ChildSearchComponent {
  @Input() postList:ReadonlyArray<Post> | undefined
  @Output() closeEvent = new EventEmitter();
  @Output() searchEvent = new EventEmitter();
  search(text:any)
  {
    this.searchEvent.emit(text as any);
  }
  close()
  {
    this.closeEvent.emit();
  }

}
