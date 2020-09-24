import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookShortItemComponent } from './cook-short-item.component';

describe('CookShortItemComponent', () => {
  let component: CookShortItemComponent;
  let fixture: ComponentFixture<CookShortItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookShortItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookShortItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
