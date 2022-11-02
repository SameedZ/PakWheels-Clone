import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedcarsComponent } from './searchedcars.component';

describe('SearchedcarsComponent', () => {
  let component: SearchedcarsComponent;
  let fixture: ComponentFixture<SearchedcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedcarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
