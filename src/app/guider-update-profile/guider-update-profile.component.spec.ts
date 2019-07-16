import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiderUpdateProfileComponent } from './guider-update-profile.component';

describe('GuiderUpdateProfileComponent', () => {
  let component: GuiderUpdateProfileComponent;
  let fixture: ComponentFixture<GuiderUpdateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiderUpdateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiderUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
