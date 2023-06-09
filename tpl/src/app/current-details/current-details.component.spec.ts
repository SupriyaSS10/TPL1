import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDetailsComponent } from './current-details.component';

describe('CurrentDetailsComponent', () => {
  let component: CurrentDetailsComponent;
  let fixture: ComponentFixture<CurrentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentDetailsComponent]
    });
    fixture = TestBed.createComponent(CurrentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
