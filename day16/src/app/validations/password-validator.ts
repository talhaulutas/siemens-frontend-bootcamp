import { AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { map } from 'rxjs';
import { Post2Service } from '../forms/inclass/post2.service';
import { PostService } from '../forms/reactive-forms/post.service';

export function PasswordValidator(
  postService: Post2Service
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return postService
      .searchByPassword(control.value)
      .pipe(map((x) => (x.length > 0 ? { productExist: true } : null)));
  };
}
