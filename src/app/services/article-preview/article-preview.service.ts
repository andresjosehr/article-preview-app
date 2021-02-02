import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { ArticlePreview } from 'src/app/interfaces/article-preview/article-preview';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlePreviewService {

  constructor(private httpClient: HttpClient) {}

  getArticlePreview(id: string):Observable<ArticlePreview>{
    return this.httpClient.get<ArticlePreview>(`${environment.api}/article-preview/${id}`);
  }
}
