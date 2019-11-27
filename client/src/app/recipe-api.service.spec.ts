import { TestBed } from '@angular/core/testing';

import { RecipeAPIService } from './recipe-api.service';

describe('RecipeAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeAPIService = TestBed.get(RecipeAPIService);
    expect(service).toBeTruthy();
  });
});
