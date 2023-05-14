import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAddDetailsComponent } from './project-add-details.component';

describe('ProjectAddDetailsComponent', () => {
  let component: ProjectAddDetailsComponent;
  let fixture: ComponentFixture<ProjectAddDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectAddDetailsComponent]
    });
    fixture = TestBed.createComponent(ProjectAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
