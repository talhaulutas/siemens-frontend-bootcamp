import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/pages/common/home/home.component';
import { PageNotFoundComponent } from './pages/pages/common/page-not-found/page-not-found.component';
import { PostCreateComponent } from './pages/post/post-create/post-create.component';
import { PostDetailComponent } from './pages/post/post-detail/post-detail.component';
import { PostListComponent } from './pages/post/post-list/post-list.component';
import { PostUpdateComponent } from './pages/post/post-update/post-update.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'post-list', component: PostListComponent
  },
  {
    path: 'post-update', component: PostUpdateComponent
  },
  {
    path: 'post-create', component: PostCreateComponent
  },
  {
    path: 'post-detail/:id', component: PostDetailComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
