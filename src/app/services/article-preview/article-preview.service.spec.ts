import { TestBed } from '@angular/core/testing';

import { ArticlePreviewService } from './article-preview.service';

describe('ArticlePreviewService', () => {
  let service: ArticlePreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlePreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
