import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRespComponent } from './login-resp.component';

describe('LoginRespComponent', () => {
  let component: LoginRespComponent;
  let fixture: ComponentFixture<LoginRespComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRespComponent]
    });
    fixture = TestBed.createComponent(LoginRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
