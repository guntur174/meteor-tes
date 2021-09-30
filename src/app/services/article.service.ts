import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import Article from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private dbPath = '/articles';

  ArticlesRef: AngularFireList<Article>;

  constructor(private db: AngularFireDatabase) {
    this.ArticlesRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Article> {
    return this.ArticlesRef;
  }

  create(article: Article): any {
    return this.ArticlesRef.push(article);
  }

  update(key: string, value: any): Promise<void> {
    return this.ArticlesRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.ArticlesRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.ArticlesRef.remove();
  }
}
