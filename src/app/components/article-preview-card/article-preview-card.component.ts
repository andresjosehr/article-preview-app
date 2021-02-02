import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlePreviewService } from 'src/app/services/article-preview/article-preview.service';
import { ArticlePreview } from 'src/app/interfaces/article-preview/article-preview';
import { environment } from 'src/environments/environment';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-article-preview-card',
  templateUrl: './article-preview-card.component.html',
  styleUrls: ['./article-preview-card.component.scss'],

  animations:[
    trigger("tooltipTrigger",[
      state("inactive", style({opacity: 0, transform: "translateY(-5px)"})),
      state("active", style({opacity: 1, transform: "translateY(0px)"})),
      transition("active <=> inactive", animate("200ms"))
    ])
  ]

})

export class ArticlePreviewCardComponent implements OnInit {

  environment=environment;
  articlePreview$!: Observable<ArticlePreview>;
  state: "active" | "inactive" = "inactive";


  constructor(private articlePreviewService: ArticlePreviewService) { }

  ngOnInit(): void {
    this.getArticlePreview();
  }

  getArticlePreview(){
    this.articlePreview$=this.articlePreviewService.getArticlePreview("601854d3374d8c0015aa654d")
  }

}
