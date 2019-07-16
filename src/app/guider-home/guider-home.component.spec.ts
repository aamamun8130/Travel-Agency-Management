import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiderHomeComponent } from './guider-home.component';

describe('GuiderHomeComponent', () => {
  let component: GuiderHomeComponent;
  let fixture: ComponentFixture<GuiderHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiderHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
