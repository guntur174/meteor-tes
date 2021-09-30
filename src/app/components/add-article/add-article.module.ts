import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddArticleRoutingModule } from './add-article-routing.module';
import { AddArticleComponent } from './add-article.component';

@NgModule({
  declarations: [AddArticleComponent],
  imports: [
    CommonModule,
    AddArticleRoutingModule
  ]
})
export class AddArticleModule { }
