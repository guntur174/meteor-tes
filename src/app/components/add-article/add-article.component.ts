import { Component, OnInit } from '@angular/core';
import Article from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import * as moment from 'moment';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  article: Article = new Article();
  submitted = false;
  downloadUrl = '';
  constructor(private articleService: ArticleService,private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  saveArticle(): void {
    this.article.createdAt = moment().format('DD/MM/YYYY')
    this.article.picture = this.downloadUrl

    console.log('', this.article)
    this.articleService.create(this.article).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    }).catch((err:any) => {
      console.log('err', err)
    })
  }

  newArticle(): void {
    this.submitted = false;
    this.article = new Article();
  }

  onFileSelected(event:any) {
    console.log("img", event)
    
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          let downloadURL = fileRef.getDownloadURL();
          downloadURL.subscribe(url => {
            if (url) {
              this.downloadUrl = url;
            }
            console.log(this.downloadUrl);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

}
