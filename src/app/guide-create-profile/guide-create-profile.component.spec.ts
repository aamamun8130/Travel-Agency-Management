import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideCreateProfileComponent } from './guide-create-profile.component';

describe('GuideCreateProfileComponent', () => {
  let component: GuideCreateProfileComponent;
  let fixture: ComponentFixture<GuideCreateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideCreateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideCreateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
