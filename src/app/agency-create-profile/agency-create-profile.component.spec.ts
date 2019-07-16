import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyCreateProfileComponent } from './agency-create-profile.component';

describe('AgencyCreateProfileComponent', () => {
  let component: AgencyCreateProfileComponent;
  let fixture: ComponentFixture<AgencyCreateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyCreateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyCreateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
