import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './components/article-list/articles-list.component';
import { AddArticleComponent } from './components/add-article/add-article.component';

const routes: Routes = [
  { path: '', redirectTo: 'articles', pathMatch: 'full' },
  // { path: 'articles', component: ArticlesListComponent },
  // { path: 'add', component: AddArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
