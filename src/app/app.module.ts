import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ArticlesListComponent } from './components/article-list/articles-list.component';
import { AddArticleModule } from './add-article/add-article/add-article.module';
import { AddListModule } from './add-list/add-list/add-list.module';
import { ArticleListModule } from './article-list/article-list/article-list.module';
import { ArticlesListModule } from './articles-list/articles-list/articles-list.module';
import { ArticleDetailsModule } from './article-details/article-details/article-details.module';

@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    ArticleDetailsComponent,
    ArticlesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AddArticleModule,
    AddListModule,
    ArticleListModule,
    ArticlesListModule,
    ArticleDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
