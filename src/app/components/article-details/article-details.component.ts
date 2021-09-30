import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import Article from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit, OnChanges {

  @Input() article?: Article;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentArticle: Article = {
    title: '',
    description: '',
    published: false
  };
  message = '';

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentArticle = { ...this.article };
  }

  updatePublished(status: boolean): void {
    if (this.currentArticle.key) {
      this.articleService.update(this.currentArticle.key, { published: status })
      .then(() => {
        this.currentArticle.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateArticle(): void {
    console.log("click")
    const data = {
      title: this.currentArticle.title,
      description: this.currentArticle.description
    };

    if (this.currentArticle.key) {
      this.articleService.update(this.currentArticle.key, data)
        .then(() => this.message = 'The article was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteArticle(): void {
    if (this.currentArticle.key) {
      this.articleService.delete(this.currentArticle.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The article was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}
